import { QueryClient } from '@tanstack/vue-query';
import { GoogleAuthError } from './axios/index';

// One shared client: components get it through VueQueryPlugin (useQuery),
// plain modules such as the Drive sync use it directly (fetchQuery).
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Retry network / server failures only — never an expired sign-in or a 4xx.
      retry: (failureCount, error) =>
        !(error instanceof GoogleAuthError) &&
        !(error?.status >= 400 && error?.status < 500) &&
        failureCount < 2,
      // Drive sync has its own focus / online handling.
      refetchOnWindowFocus: false,
    },
  },
});

export const queryKeys = {
  google: {
    all: ['google'],
    user: () => ['google', 'user'],
    driveFile: (fileId) => ['google', 'drive', 'file', fileId],
    driveFiles: (params) => ['google', 'drive', 'files', params],
    driveFileContent: (fileId) => ['google', 'drive', 'content', fileId],
  },
};
