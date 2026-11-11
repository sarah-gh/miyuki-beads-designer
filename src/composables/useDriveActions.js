import { drive, signIn, signOut, syncNow } from '@/lib/drive/driveSync.js';
import { showConfirm, showError, showToast } from '@/lib/utils/sweetalert';

/** Google Drive actions with their user-facing messages. */
export function useDriveActions() {
  async function connect() {
    try {
      await signIn();
      if (drive.status === 'synced') showToast('Connected to Google Drive');
    } catch (error) {
      if (!/cancel/i.test(error?.message ?? '')) {
        showError('Could not connect to Google Drive', error?.message ?? '');
      }
    }
  }

  async function disconnect() {
    const result = await showConfirm(
      'Sign out of Google?',
      'Your projects stay in this browser and in your Google Drive. New changes will no longer be backed up until you sign in again.',
    );
    if (result.isConfirmed) {
      signOut();
      showToast('Signed out of Google');
    }
  }

  async function sync() {
    await syncNow();
    if (drive.status === 'synced') showToast('Projects synced');
  }

  return { connect, disconnect, sync };
}
