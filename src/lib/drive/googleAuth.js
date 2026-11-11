// Google sign-in with Google Identity Services (token model, no backend).
// The access token lives about an hour; when it expires the user is asked to
// reconnect (browsers block the sign-in popup unless it follows a click).

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID?.trim() ?? '';
const GIS_SRC = 'https://accounts.google.com/gsi/client';
const TOKEN_KEY = 'mbd.google.token';

// drive.file: only the files this app creates. openid/email/profile: the
// account name and picture shown in the header.
const SCOPES = [
  'https://www.googleapis.com/auth/drive.file',
  'openid',
  'email',
  'profile',
].join(' ');

export const isGoogleConfigured = Boolean(CLIENT_ID);

let gisPromise = null;
function loadGis() {
  if (window.google?.accounts?.oauth2) return Promise.resolve();
  gisPromise ??= new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = GIS_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      gisPromise = null;
      reject(
        new Error('Could not load Google sign-in. Check your connection.'),
      );
    };
    document.head.appendChild(script);
  });
  return gisPromise;
}

/** Load the sign-in script early so the popup opens straight from the click. */
export function preloadGoogle() {
  if (isGoogleConfigured) loadGis().catch(() => {});
}

function readToken() {
  try {
    const saved = JSON.parse(localStorage.getItem(TOKEN_KEY) ?? 'null');
    return saved?.accessToken ? saved : null;
  } catch {
    return null;
  }
}

function writeToken(token) {
  try {
    if (token) localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
    else localStorage.removeItem(TOKEN_KEY);
  } catch {
    /* storage unavailable */
  }
}

/** The saved token if it is still valid for at least a minute, else null. */
export function currentToken() {
  const token = readToken();
  return token && token.expiresAt - Date.now() > 60_000 ? token : null;
}

/** True when the user signed in before (even if the token has expired). */
export function hasSignedInBefore() {
  return Boolean(readToken());
}

/**
 * Open Google's sign-in / consent popup. Call from a click handler.
 * `hint`: email of the previous account, to skip the account chooser.
 */
export async function requestToken({ hint } = {}) {
  if (!isGoogleConfigured) throw new Error('Google sign-in is not set up.');
  await loadGis();
  return new Promise((resolve, reject) => {
    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      hint,
      callback: (response) => {
        if (response.error) {
          reject(new Error(response.error_description || response.error));
          return;
        }
        if (
          !window.google.accounts.oauth2.hasGrantedAllScopes(
            response,
            'https://www.googleapis.com/auth/drive.file',
          )
        ) {
          reject(new Error('Google Drive access was not allowed.'));
          return;
        }
        const token = {
          accessToken: response.access_token,
          expiresAt: Date.now() + Number(response.expires_in ?? 3600) * 1000,
          user: readToken()?.user ?? null,
        };
        writeToken(token);
        resolve(token);
      },
      error_callback: (error) =>
        reject(
          new Error(
            error?.type === 'popup_closed'
              ? 'Sign-in was cancelled.'
              : error?.message || 'Sign-in failed.',
          ),
        ),
    });
    client.requestAccessToken({ prompt: hint ? '' : 'consent' });
  });
}

/** Name, email and picture of the signed-in account (cached with the token). */
export async function fetchUser(token) {
  const response = await fetch(
    'https://www.googleapis.com/oauth2/v3/userinfo',
    {
      headers: { Authorization: `Bearer ${token.accessToken}` },
    },
  );
  if (!response.ok) throw new Error('Could not read the Google account.');
  const info = await response.json();
  const user = { name: info.name, email: info.email, picture: info.picture };
  writeToken({ ...token, user });
  return user;
}

export function savedUser() {
  return readToken()?.user ?? null;
}

export function signOutGoogle() {
  const token = readToken();
  writeToken(null);
  if (token?.accessToken && window.google?.accounts?.oauth2) {
    window.google.accounts.oauth2.revoke(token.accessToken, () => {});
  }
}
