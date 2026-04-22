// Mock CSRF token retrieval
export const pegarTokenCsrf = async () => Promise.resolve({ csrfToken: 'mock-csrf-token' });
