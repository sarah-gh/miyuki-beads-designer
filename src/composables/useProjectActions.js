import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import { getMode } from '@/lib/projects/modes.js';
import {
  createProject,
  deleteProject,
  duplicateProject,
  getProject,
  renameProject,
} from '@/lib/projects/projectStore.js';
import { showConfirm, showError, showToast } from '@/lib/utils/sweetalert';

/** Shared project actions (open / create / rename / duplicate / delete) with their dialogs. */
export function useProjectActions() {
  const router = useRouter();

  function openProject(project) {
    const mode = getMode(project.mode);
    if (mode) router.push({ name: mode.route, params: { id: project.id } });
  }

  function create({ mode, name, template = null }) {
    try {
      const project = createProject({
        mode,
        name: name || template?.name,
        data: template?.data ?? null,
        templateId: template?.id ?? null,
      });
      openProject(project);
      return project;
    } catch (error) {
      console.error(error);
      showError(
        'Could not create the project',
        'Browser storage is full. Delete some old projects and try again.',
      );
      return null;
    }
  }

  async function rename(project) {
    const result = await Swal.fire({
      title: 'Rename project',
      input: 'text',
      inputValue: project.name,
      showCancelButton: true,
      confirmButtonColor: '#6b7f3a',
      cancelButtonColor: '#85736a',
      confirmButtonText: 'Rename',
      inputValidator: (value) =>
        !value?.trim() ? 'Please enter a name' : null,
    });
    if (result.isConfirmed) renameProject(project.id, result.value);
  }

  function duplicate(project) {
    try {
      const copy = duplicateProject(project.id);
      if (copy) showToast('Project duplicated');
    } catch (error) {
      console.error(error);
      showError('Could not duplicate', 'Browser storage is full.');
    }
  }

  async function remove(project) {
    const result = await showConfirm(
      `Delete "${project.name}"?`,
      'The project will be removed from this browser. This cannot be undone.',
    );
    if (result.isConfirmed && getProject(project.id)) {
      deleteProject(project.id);
      showToast('Project deleted');
    }
  }

  function menuItems(project) {
    return [
      {
        label: 'Open',
        icon: 'folderOpen',
        onSelect: () => openProject(project),
      },
      { label: 'Rename', icon: 'pencil', onSelect: () => rename(project) },
      { label: 'Duplicate', icon: 'copy', onSelect: () => duplicate(project) },
      { divider: true },
      {
        label: 'Delete',
        icon: 'trash',
        danger: true,
        onSelect: () => remove(project),
      },
    ];
  }

  return { openProject, create, rename, duplicate, remove, menuItems };
}
