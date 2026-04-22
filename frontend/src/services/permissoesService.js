// Mock permissoesService
export const pegarPermissoes = async () =>
    Promise.resolve([
        { id: 1, codename: 'add_event', name: 'Adicionar evento' },
        { id: 2, codename: 'change_event', name: 'Alterar evento' },
    ]);
