let baseUrl = '';

if (import.meta.env.MODE === 'development') {
  // Development mode
  baseUrl = import.meta.env.VITE_APP_BASE_URL;
} else {
  // Production mode
  const currentUrl = window.location.href;
  if (currentUrl.startsWith('https://develop')) {
    // If the app is being served from a URL that starts with "develop"
    baseUrl = import.meta.env.VITE_APP_BASE_URL_DEV;
  } else {
    // Otherwise use the production URL
    baseUrl = import.meta.env.VITE_APP_BASE_URL_PRO;
  }
}

export { baseUrl as baseURL };
