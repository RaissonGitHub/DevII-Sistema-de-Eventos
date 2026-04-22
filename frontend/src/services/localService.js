// Mock localService

export const pegarLocais = async () =>
    Promise.resolve([
        { id: 1, nome: 'Campus Restinga', endereco: 'Rua A, 123' },
        { id: 2, nome: 'Campus Centro', endereco: 'Av. B, 456' },
    ]);

export const pegarLocal = async (id) => {
    if (!id) return null;
    return Promise.resolve({ id, nome: `Local ${id}`, endereco: 'Endereço exemplo' });
};

export const criarLocal = async (dados) => {
    return Promise.resolve({ id: Date.now(), ...dados });
};

export const atualizarLocal = async (id, dados) => {
    if (!id) return null;
    return Promise.resolve({ id, ...dados });
};
