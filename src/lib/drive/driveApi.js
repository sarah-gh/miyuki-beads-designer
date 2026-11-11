// Minimal Google Drive v3 client (fetch only). Every project is one JSON file
// inside an app folder; its id and edit date are kept in appProperties so the
// folder can be listed without downloading every file.

const API = 'https://www.googleapis.com/drive/v3';
const UPLOAD = 'https://www.googleapis.com/upload/drive/v3';
const FOLDER_MIME = 'application/vnd.google-apps.folder';
export const FOLDER_NAME = 'Miyuki Beads Designer';

export class DriveAuthError extends Error {}

async function call(token, url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
      ...options.headers,
    },
  });
  if (response.status === 401) {
    throw new DriveAuthError('Google sign-in expired.');
  }
  if (!response.ok) {
    let message = `Google Drive error ${response.status}`;
    try {
      message = (await response.json()).error?.message || message;
    } catch {
      /* not JSON */
    }
    throw new Error(message);
  }
  return response.status === 204 ? null : response;
}

const q = (text) => text.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

/** The app folder's id, creating the folder the first time. */
export async function ensureFolder(token, knownId) {
  if (knownId) {
    try {
      const res = await call(
        token,
        `${API}/files/${knownId}?fields=id,trashed`,
      );
      const folder = await res.json();
      if (!folder.trashed) return folder.id;
    } catch (error) {
      if (error instanceof DriveAuthError) throw error;
      /* gone: look it up again below */
    }
  }
  const query = `name='${q(FOLDER_NAME)}' and mimeType='${FOLDER_MIME}' and trashed=false`;
  const res = await call(
    token,
    `${API}/files?q=${encodeURIComponent(query)}&fields=files(id)&spaces=drive`,
  );
  const { files } = await res.json();
  if (files?.length) return files[0].id;

  const created = await call(token, `${API}/files?fields=id`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: FOLDER_NAME, mimeType: FOLDER_MIME }),
  });
  return (await created.json()).id;
}

/** [{ fileId, projectId, updatedAt }] for every project file in the folder. */
export async function listProjectFiles(token, folderId) {
  const query = `'${folderId}' in parents and trashed=false`;
  const result = [];
  let pageToken = '';
  do {
    const url =
      `${API}/files?q=${encodeURIComponent(query)}&pageSize=1000` +
      `&fields=nextPageToken,files(id,appProperties)` +
      (pageToken ? `&pageToken=${pageToken}` : '');
    const page = await (await call(token, url)).json();
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

export async function downloadFile(token, fileId) {
  const res = await call(token, `${API}/files/${fileId}?alt=media`);
  return res.json();
}

function fileName(name) {
  const safe = (name || 'Untitled').replace(/[\\/:*?"<>|]+/g, ' ').trim();
  return `${safe}.miyuki.json`;
}

/** Create (no fileId) or overwrite a project file. Returns the file id. */
export async function uploadProject(token, { folderId, fileId, payload }) {
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
  const url = fileId
    ? `${UPLOAD}/files/${fileId}?uploadType=multipart&fields=id`
    : `${UPLOAD}/files?uploadType=multipart&fields=id`;
  const res = await call(token, url, {
    method: fileId ? 'PATCH' : 'POST',
    headers: { 'Content-Type': `multipart/related; boundary=${boundary}` },
    body,
  });
  return (await res.json()).id;
}

/** Move a project file to the Drive trash (recoverable for 30 days). */
export async function trashFile(token, fileId) {
  try {
    await call(token, `${API}/files/${fileId}?fields=id`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ trashed: true }),
    });
  } catch (error) {
    // Already gone is fine.
    if (
      error instanceof DriveAuthError ||
      !/404|not found/i.test(error.message)
    ) {
      throw error;
    }
  }
}

export function folderUrl(folderId) {
  return `https://drive.google.com/drive/folders/${folderId}`;
}
