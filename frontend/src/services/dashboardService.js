// Mock dashboard data
export async function getDashboard() {
    return Promise.resolve({
        total_eventos: 5,
        total_participantes: 320,
        proximos_eventos: [{ id: 1, nome: 'Semana da Tecnologia 2026' }],
    });
}

///alterar para env do Bruno///
