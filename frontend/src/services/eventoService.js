// Mock implementations para `eventoService`

export const listarEventos = async () =>
    Promise.resolve([
        { id: 1, nome: 'Semana da Tecnologia 2026', inicio: '2026-06-01', fim: '2026-06-05', status: 'aberto' },
        { id: 2, nome: 'Jornada Acadêmica 2026', inicio: '2026-09-10', fim: '2026-09-12', status: 'rascunho' },
    ]);

export const criarEvento = async (dados) => {
    const criado = { id: Date.now(), ...dados };
    return Promise.resolve(criado);
};

export const buscarOpcoesFormulario = async () =>
    Promise.resolve({ categorias: ['Palestra', 'Oficina'], modalidades: ['Presencial', 'Remoto'] });

export const deletarEvento = async (eventoId) => {
    if (!eventoId) return null;
    return Promise.resolve({ success: true, id: eventoId });
};

export const buscarEventoPorId = async (id) => {
    if (!id) return null;
    return Promise.resolve({ id, nome: `Evento Mock ${id}`, descricao: 'Descrição do evento mock' });
};

export const atualizarEvento = async (id, dados) => {
    if (!id) return null;
    return Promise.resolve({ id, ...dados });
};

export const definirCoordenadorEvento = async (eventoId, userId) => {
    if (!eventoId || !userId) return null;
    return Promise.resolve({ success: true, eventoId, userId });
};

export const removerCoordenadorEvento = async (eventoId, userId) => {
    if (!eventoId || !userId) return null;
    return Promise.resolve({ success: true, eventoId, userId });
};

export const listarCoordenadoresEvento = async (eventoId) => {
    if (!eventoId) return { coordenadores: [] };
    return Promise.resolve({ coordenadores: [{ id: 1, nome: 'João Silva' }] });
};

export const definirOrganizadorEvento = async (eventoId, userId) => {
    if (!eventoId || !userId) return null;
    return Promise.resolve({ success: true, eventoId, userId });
};

export const removerOrganizadorEvento = async (eventoId, userId) => {
    if (!eventoId || !userId) return null;
    return Promise.resolve({ success: true, eventoId, userId });
};

export const listarOrganizadoresEvento = async (eventoId) => {
    if (!eventoId) return { organizadores: [] };
    return Promise.resolve({ organizadores: [{ id: 2, nome: 'Maria Souza' }] });
};