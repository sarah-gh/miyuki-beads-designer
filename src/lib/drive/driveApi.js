// Google Drive helpers for project sync. Every project is one JSON file
// inside an app folder; its id and edit date are kept in appProperties so the
// folder can be listed without downloading every file.
//
// HTTP goes through the axios services (the access token is added by the
// httpGoogle interceptor); reads go through vue-query's shared client, which
// de-duplicates parallel requests and retries transient failures.

import { GoogleAuthError, GoogleApiError } from '@/services/axios/index';
import {
  createDriveFile,
  downloadDriveFile,
  getDriveFile,
  searchDriveFiles,
  updateDriveFile,
  uploadDriveFile,
} from '@/services/axios/googleDrive.service';
import { getGoogleUser } from '@/services/axios/googleUser.service';
import { queryClient, queryKeys } from '@/services/queryClient';

const FOLDER_MIME = 'application/vnd.google-apps.folder';
export const FOLDER_NAME = 'Miyuki Beads Designer';

// Kept under its old name: the sync code treats it as "reconnect needed".
export { GoogleAuthError as DriveAuthError };

/** Always hits the network (sync needs fresh data), cached only while in flight. */
const fetchFresh = (queryKey, queryFn) =>
  queryClient.fetchQuery({ queryKey, queryFn, staleTime: 0, gcTime: 0 });

const q = (text) => text.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

/** Name, email and picture of the signed-in Google account. */
export async function fetchGoogleUser() {
  const info = await fetchFresh(queryKeys.google.user(), getGoogleUser);
  return { name: info.name, email: info.email, picture: info.picture };
}

/** The app folder's id, creating the folder the first time. */
export async function ensureFolder(knownId) {
  if (knownId) {
    try {
      const folder = await fetchFresh(queryKeys.google.driveFile(knownId), () =>
        getDriveFile(knownId, 'id,trashed'),
      );
      if (!folder.trashed) return folder.id;
    } catch (error) {
      if (error instanceof GoogleAuthError) throw error;
      /* gone: look it up again below */
    }
  }
  const params = {
    q: `name='${q(FOLDER_NAME)}' and mimeType='${FOLDER_MIME}' and trashed=false`,
    fields: 'files(id)',
    spaces: 'drive',
  };
  const { files } = await fetchFresh(queryKeys.google.driveFiles(params), () =>
    searchDriveFiles(params),
  );
  if (files?.length) return files[0].id;

  const created = await createDriveFile({
    name: FOLDER_NAME,
    mimeType: FOLDER_MIME,
  });
  return created.id;
}

/** [{ fileId, projectId, updatedAt }] for every project file in the folder. */
export async function listProjectFiles(folderId) {
  const result = [];
  let pageToken = '';
  do {
    const params = {
      q: `'${folderId}' in parents and trashed=false`,
      pageSize: 1000,
      fields: 'nextPageToken,files(id,appProperties)',
      ...(pageToken ? { pageToken } : {}),
    };
    const page = await fetchFresh(queryKeys.google.driveFiles(params), () =>
      searchDriveFiles(params),
    );
    for (const file of page.files ?? []) {
      const props = file.appProperties ?? {};
      if (props.projectId) {
        result.push({
          fileId: file.id,
          projectId: props.projectId,
          updatedAt: props.updatedAt ?? '',
        });
      }
    }
    pageToken = page.nextPageToken ?? '';
  } while (pageToken);
  return result;
}

export function downloadFile(fileId) {
  return fetchFresh(queryKeys.google.driveFileContent(fileId), () =>
    downloadDriveFile(fileId),
  );
}

function fileName(name) {
  const safe = (name || 'Untitled').replace(/[\\/:*?"<>|]+/g, ' ').trim();
  return `${safe}.miyuki.json`;
}

/** Create (no fileId) or overwrite a project file. Returns the file id. */
export async function uploadProject({ folderId, fileId, payload }) {
  const { project } = payload;
  const metadata = {
    name: fileName(project.name),
    mimeType: 'application/json',
    appProperties: {
      projectId: project.id,
      updatedAt: project.updatedAt,
      mode: project.mode,
    },
    ...(fileId ? {} : { parents: [folderId] }),
  };
  const boundary = `mbd${Math.random().toString(36).slice(2)}`;
  const body =
    `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n` +
    `${JSON.stringify(metadata)}\r\n` +
    `--${boundary}\r\nContent-Type: application/json\r\n\r\n` +
    `${JSON.stringify(payload)}\r\n--${boundary}--`;
  const uploaded = await uploadDriveFile({ fileId, body, boundary });
  return uploaded.id;
}

/** Move a project file to the Drive trash (recoverable for 30 days). */
export async function trashFile(fileId) {
  try {
    await updateDriveFile(fileId, { trashed: true });
  } catch (error) {
    // Already gone is fine.
    if (!(error instanceof GoogleApiError && error.status === 404)) {
      throw error;
    }
  }
}

/** Forget every cached Google response (sign-out / account switch). */
export function clearGoogleQueries() {
  queryClient.removeQueries({ queryKey: queryKeys.google.all });
}

export function folderUrl(folderId) {
  return `https://drive.google.com/drive/folders/${folderId}`;
}
