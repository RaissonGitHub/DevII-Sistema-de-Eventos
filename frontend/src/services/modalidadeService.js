// Mock modalidadeService

export const pegarModalidades = async () =>
    Promise.resolve([
        { id: 1, nome: 'Comunicação Científica' },
        { id: 2, nome: 'Apresentação Oral' },
    ]);

export const pegarModalidade = async (id) => {
    if (!id) return null;
    return Promise.resolve({ id, nome: `Modalidade ${id}` });
};

export const criarModalidade = async (dados) => Promise.resolve({ id: Date.now(), ...dados });

export const atualizarModalidade = async (id, dados) => {
    if (!id) return null;
    return Promise.resolve({ id, ...dados });
};

export const deletarModalidade = async (id) => {
    if (!id) return null;
    return Promise.resolve({ success: true, id });
};

export const pegarOptionsModalidades = async () =>
    Promise.resolve({ actions: { POST: { nome: { required: true, type: 'string' } } } });

export const validarModalidade = async (payload, method = 'POST') => ({ valido: true, erros: {} });

export const validarCampoFormulario = async (payload, method = 'POST') => ({ valido: true, erros: {} });

export const validarCriterioAvaliacao = async (payload, method = 'POST') => ({ valido: true, erros: {} });
