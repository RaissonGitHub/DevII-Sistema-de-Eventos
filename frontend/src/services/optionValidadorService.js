// Mock optionValidadorService: fornece schemas simples em memória

const cacheOptions = new Map();

function buildUrl(path) {
    if (!path) return path;
    return path;
}

export async function pegarOptions(path) {
    const url = buildUrl(path);
    if (cacheOptions.has(url)) return cacheOptions.get(url);
    // esquema simples de exemplo
    const schema = { actions: { POST: { nome: { required: true, type: 'string', min_length: 3 } } } };
    cacheOptions.set(url, schema);
    return schema;
}

function validarComSchema(schema, payload, method = 'POST') {
    const erros = {};
    const camposSchema = schema?.actions?.[String(method).toUpperCase()] || schema?.actions?.POST;
    if (!camposSchema) return { valido: true, erros: {} };
    Object.keys(camposSchema).forEach((campo) => {
        const regras = camposSchema[campo];
        const valor = payload?.[campo];
        if (regras.required && (valor === undefined || valor === null || valor === '')) {
            erros[campo] = ['Campo obrigatório'];
            return;
        }
        if (regras.min_length && String(valor || '').length < regras.min_length) {
            erros[campo] = [`Deve ter ao menos ${regras.min_length} caracteres`];
        }
    });
    return { valido: Object.keys(erros).length === 0, erros };
}

export async function validarComOptions(path, payload, method = 'POST') {
    try {
        const schema = await pegarOptions(path);
        return validarComSchema(schema, payload, method);
    } catch (err) {
        return { valido: true, erros: {} };
    }
}

export default {
    pegarOptions,
    validarComOptions,
};
