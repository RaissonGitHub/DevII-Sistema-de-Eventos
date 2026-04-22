// Mock espacoService

export const pegarEspacos = async (localId = null) => {
    const todos = [
        { id: 1, nome: 'Sala 101', local: 1, capacidade: 30 },
        { id: 2, nome: 'Auditório A', local: 1, capacidade: 200 },
    ];
    if (localId) return Promise.resolve(todos.filter((e) => e.local === localId));
    return Promise.resolve(todos);
};

export const pegarEspaco = async (id) => {
    if (!id) return null;
    return Promise.resolve({ id, nome: `Espaço ${id}`, capacidade: 50 });
};

export const criarEspaco = async (dados) => Promise.resolve({ id: Date.now(), ...dados });

export const atualizarEspaco = async (id, dados) => {
    if (!id) return null;
    return Promise.resolve({ id, ...dados });
};

export const excluirEspaco = async (id) => {
    if (!id) return null;
    return Promise.resolve({ success: true, id });
};
