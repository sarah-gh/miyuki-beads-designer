import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { getProject } from '@/lib/projects/projectStore.js';

/** Editor routes only open projects that exist and belong to their mode. */
function requireProject(mode) {
  return (to) => {
    const project = getProject(to.params.id);
    if (project?.mode === mode) return true;
    return { name: 'projects', query: { mode } };
  };
}

function editorRoute(mode, name, component) {
  return {
    path: `/${mode}/:id`,
    name,
    component,
    props: true,
    meta: { layout: 'editor', mode },
    beforeEnter: requireProject(mode),
  };
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { layout: 'dashboard' },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      meta: { layout: 'dashboard' },
    },
    {
      path: '/templates',
      name: 'templates',
      component: () => import('../views/TemplatesView.vue'),
      meta: { layout: 'dashboard' },
    },

    editorRoute('3d', 'design3d-editor', () => import('../views/Design3D.vue')),
    editorRoute('flat', 'flat-editor', () => import('../views/FlatGrid.vue')),
    editorRoute(
      'weaving',
      'weaving-editor',
      () => import('../views/WeavingGrid.vue'),
    ),
    editorRoute(
      'peyote',
      'peyote-editor',
      () => import('../views/PeyoteGrid.vue'),
    ),
    {
      path: '/beadwork-pattern',
      name: 'beadwork-pattern',
      component: () => import('../views/BeadworkPattern.vue'),
      meta: { layout: 'editor', mode: 'beadwork' },
    },

    // Old single-editor URLs now go to that mode's projects.
    {
      path: '/weaving-grid',
      redirect: { name: 'projects', query: { mode: 'weaving' } },
    },
    {
      path: '/peyote-grid',
      redirect: { name: 'projects', query: { mode: 'peyote' } },
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/sweetalert-demo',
      name: 'sweetalert-demo',
      component: () => import('../components/SweetAlertDemo.vue'),
    },
    { path: '/:pathMatch(.*)*', redirect: { name: 'home' } },
  ],
});

export default router;
