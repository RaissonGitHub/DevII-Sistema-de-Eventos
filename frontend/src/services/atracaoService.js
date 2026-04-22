// Mock implementations: retornam objetos/arrays de exemplo para desenvolvimento

export const listarAtracoes = async () => {
    return Promise.resolve([
        { id: 1, titulo: 'Palestra: Futuro Digital', evento: 1, equipe: [], status: 'rascunho' },
        { id: 2, titulo: 'Oficina: Introdução ao Linux', evento: 1, equipe: [], status: 'aprovado' },
    ]);
};

export const criarAtracao = async (dados) => {
    const novo = { id: Date.now(), ...dados, status: 'rascunho' };
    return Promise.resolve(novo);
};

export const salvarRascunho = async (dados) => {
    const rascunho = { id: Date.now(), ...dados, status: 'rascunho' };
    return Promise.resolve(rascunho);
};

export const buscarOpcoesAtracao = async () => {
    return Promise.resolve({
        tipos: [{ value: 'palestra', display: 'Palestra' }, { value: 'oficina', display: 'Oficina' }],
        setores: [{ value: 1, display: 'Computação' }, { value: 2, display: 'Humanas' }],
    });
};

export const buscarEventos = async () => {
    return Promise.resolve([
        { id: 1, nome: 'Semana da Tecnologia 2026' },
        { id: 2, nome: 'Jornada de Pesquisa 2026' },
    ]);
};

export const buscarUsuarios = async () => {
    return Promise.resolve([
        { id: 1, nome: 'João Silva', email: 'joao@example.com' },
        { id: 2, nome: 'Maria Souza', email: 'maria@example.com' },
    ]);
};
