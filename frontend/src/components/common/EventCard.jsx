import React from 'react';
import Button from 'react-bootstrap/Button';
import { MdOutlineSearch } from 'react-icons/md';
import Card from './Card';

export default function EventCard({
    corCard = "#016B3F",
    titulo,
    data,
    faseAtual,
    corFase = '#106D47',
    descricao,
    textoBotao = 'Ver Detalhes',
    onDetailsClick,
    Icon,
}) {
    return (
        <Card corBorda={corCard}>
            <div className="d-flex ms-5 mt-5 align-items-center">
                <h3 className="fw-bold">{titulo}</h3>
                <span className="ms-3 fw-bold">Realização: {data}</span>
            </div>
            <div className="d-flex ms-5  align-items-center mt-2">
                <span className="fw-bold">
                    Fase atual:{' '}
                    <span className="fw-bold" style={{ color: corFase }}>
                        {faseAtual}
                    </span>
                </span>
                <div className="d-flex w-75 justify-content-end">
                    <Button
                        variant="success"
                        className="fw-bold"
                        style={{ background: '#00A44B', border: 'none' }}
                        onClick={onDetailsClick}
                    >
                        {Icon ? (
                            <Icon size={20} />
                        ) : (
                            <MdOutlineSearch size={20} />
                        )}
                        {textoBotao}
                    </Button>
                </div>
            </div>
            <div className="d-flex ms-5  align-items-center mt-2">
                <span className="fw-bold">Descrição:</span>
            </div>
            <div className="d-flex ms-5  align-items-center mt-2">
                <span className="fw-light text-break w-50">{descricao}</span>
            </div>
        </Card>
    );
}
