// Mock campoFormularioService

export const pegarCampoFormulario = async () =>
    Promise.resolve([
        { id: 1, nome: 'Título', tipo: 'string', obrigatorio: true },
        { id: 2, nome: 'Resumo', tipo: 'text', obrigatorio: true },
    ]);

export const criarCampoFormulario = async (dados) => Promise.resolve({ id: Date.now(), ...dados });

export const atualizarCampoFormulario = async (id, dados) => {
    if (!id) return null;
    return Promise.resolve({ id, ...dados });
};

export const deletarCampoFormulario = async (id) => {
    if (!id) return null;
    return Promise.resolve({ success: true, id });
};

export const pegarOptionsCampoFormulario = async () =>
    Promise.resolve({ actions: { POST: { nome: { required: true, type: 'string' } } } });
