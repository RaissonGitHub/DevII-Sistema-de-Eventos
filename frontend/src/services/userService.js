// Mock user service

export const pegarUsers = async () =>
    Promise.resolve([
        { id: 1, nome: 'João Silva', email: 'joao@example.com' },
        { id: 2, nome: 'Maria Souza', email: 'maria@example.com' },
    ]);

export const pegarUser = async (id) => {
    if (!id) return null;
    return Promise.resolve({ id, nome: `Usuário ${id}`, email: `user${id}@example.com` });
};

export const atualizarGrupos = async (id, idGroups) => {
    if (!id) return null;
    return Promise.resolve({ id, grupos: idGroups });
};

export const atualizarPermissoesUsers = async (id, idPerms) => {
    if (!id) return null;
    return Promise.resolve({ id, permissoes: idPerms });
};