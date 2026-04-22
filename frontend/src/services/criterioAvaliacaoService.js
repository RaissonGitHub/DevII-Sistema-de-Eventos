// Mock criterioAvaliacaoService

export const pegarCriterioAvaliacao = async () =>
    Promise.resolve([
        { id: 1, nome: 'Clareza', peso: 5 },
        { id: 2, nome: 'Originalidade', peso: 5 },
    ]);

export const criarCriterioAvaliacao = async (dados) => Promise.resolve({ id: Date.now(), ...dados });

export const atualizarCriterioAvaliacao = async (id, dados) => {
    if (!id) return null;
    return Promise.resolve({ id, ...dados });
};

export const deletarCriterioAvaliacao = async (id) => {
    if (!id) return null;
    return Promise.resolve({ success: true, id });
};

export const pegarOptionsCriteriovaliacao = async () =>
    Promise.resolve({ actions: { POST: { nome: { required: true, type: 'string' } } } });
