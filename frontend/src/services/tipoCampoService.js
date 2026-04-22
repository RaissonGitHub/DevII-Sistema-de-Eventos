// Mock tipoCampoService

export const pegarTipoCampo = async () =>
    Promise.resolve([
        { value: 'string', display: 'Texto' },
        { value: 'integer', display: 'Número inteiro' },
    ]);
