import { httpGoogle } from './index';

const END_POINT = 'drive/v3/files';
const UPLOAD_END_POINT = 'upload/drive/v3/files';

const getDriveFile = (fileId, fields = 'id') =>
  httpGoogle.get(`${END_POINT}/${fileId}`, { params: { fields } });

const searchDriveFiles = (params) => httpGoogle.get(END_POINT, { params });

const createDriveFile = (metadata, fields = 'id') =>
  httpGoogle.post(END_POINT, metadata, { params: { fields } });

const updateDriveFile = (fileId, metadata, fields = 'id') =>
  httpGoogle.patch(`${END_POINT}/${fileId}`, metadata, { params: { fields } });

const downloadDriveFile = (fileId) =>
  httpGoogle.get(`${END_POINT}/${fileId}`, { params: { alt: 'media' } });

/** Multipart upload: creates a file (no fileId) or overwrites its content. */
const uploadDriveFile = ({ fileId, body, boundary }) => {
  const config = {
    params: { uploadType: 'multipart', fields: 'id' },
    headers: { 'Content-Type': `multipart/related; boundary=${boundary}` },
  };
  return fileId
    ? httpGoogle.patch(`${UPLOAD_END_POINT}/${fileId}`, body, config)
    : httpGoogle.post(UPLOAD_END_POINT, body, config);
};

export {
  getDriveFile,
  searchDriveFiles,
  createDriveFile,
  updateDriveFile,
  downloadDriveFile,
  uploadDriveFile,
};
