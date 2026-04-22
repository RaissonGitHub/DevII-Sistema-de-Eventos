import { BACKEND_BASE_URL, HUB_BASE_URL } from '../config';

// [TEMP-FALLBACK] Funções removidas: setToken, getToken, removeToken (eram localStorage)
// Tokens agora são armazenados em HttpOnly cookies no servidor

export async function redirectToLogin() {
    let systemId = '';
    try {
        const response = await fetch(`${BACKEND_BASE_URL}/session/system-id/`);
        if (response.ok) {
            const data = await response.json();
            systemId = data.system || '';
        }
    } catch {
        // Redireciona mesmo sem o system ID se o backend estiver indisponível.
    }
    const params = systemId ? `?system=${encodeURIComponent(systemId)}` : '';
    window.location.href = `${HUB_BASE_URL}/session/${params}`;
}

export async function handleAuthCallback(userId) {
    if (!userId) {
        throw new Error('Parâmetro user não fornecido pelo Hub.');
    }
    // Mock: retorna um usuário simples para desenvolvimento
    return Promise.resolve({ id: Number(userId) || 1, nome: 'Usuário Mock', email: 'mock@example.com' });
}

export async function getCurrentUser() {
    // Mock: retorna usuário ou null
    return Promise.resolve({ id: 1, nome: 'Usuário Mock', email: 'mock@example.com' });
}

export async function refreshToken() {
    // Mock: indica que o refresh teve sucesso
    return Promise.resolve({ refreshed: true });
}

export async function checkSession() {
    // Mock: sempre autentica com usuário mock
    const user = await getCurrentUser();
    return { authenticated: !!user, user };
}

export async function logout() {
    // Mock logout: nada a fazer no ambiente de desenvolvimento
    return Promise.resolve({ success: true });
}
