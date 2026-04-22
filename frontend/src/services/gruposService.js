// Mock gruposService

export const pegarGrupos = async () =>
    Promise.resolve([
        { id: 1, name: 'Coordenadores' },
        { id: 2, name: 'Organizadores' },
    ]);

export const pegarGrupo = async (id) => {
    if (!id) return null;
    return Promise.resolve({ id, name: `Grupo ${id}` });
};

export const atualizarPermissoes = async (id, idPerms) => {
    if (!id) return null;
    return Promise.resolve({ id, permission_id: idPerms });
};

export const atualizarUsuarios = async (id, idUsers) => {
    if (!id) return null;
    return Promise.resolve({ id, user_id: idUsers });
};
