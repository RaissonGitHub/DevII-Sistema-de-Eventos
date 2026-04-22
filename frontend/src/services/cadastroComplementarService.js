// Mock cadastroComplementarService

export const buscarOpcoesCadastro = async () =>
    Promise.resolve({ campos: [{ nome: 'CPF' }, { nome: 'Telefone' }] });

export const salvarInformacoesComplementares = async (dados, tokenCsrf) => {
    return Promise.resolve({ success: true, dados });
};
