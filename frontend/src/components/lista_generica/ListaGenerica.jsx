import React from 'react';
import Card from '../common/Card';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { MdBook, MdEdit, MdDelete, MdAddCircle } from 'react-icons/md';

export default function ListaGenerica({
    corBorda = '#00A44B',
    titulo = 'Itens cadastrados',
    itens = [],
    loading = false,
    error = null,
    rotaAdicionar = '/',
    rotaEditarBase = '/',
    onDeletar,
}) {
    const navigate = useNavigate();

    return (
        <Card corBorda={corBorda} className="mb-4">
            <Container fluid className="mb-5">
                {/* linha título */}
                <Row className="d-flex flex-column px-5">
                    <Col className="d-flex  mt-5 align-items-center">
                        <MdBook color={corBorda} size={35} />
                        <h3
                            className="fw-bold ms-1 mb-0"
                            style={{ color: corBorda }}
                        >
                            {titulo}
                        </h3>
                    </Col>
                    <Col className="d-flex justify-content-center ">
                        <hr className="w-100" style={{ border: '1px solid' }} />
                    </Col>
                </Row>

                {loading && <p>Carregando {titulo.toLowerCase()}...</p>}

                {error && (
                    <p className="text-danger">
                        {typeof error === 'string'
                            ? error
                            : 'Erro ao carregar itens'}
                    </p>
                )}

                {/* Lista de itens */}
                <Row className="mb-3 px-5">
                    <Col>
                        <ListGroup variant="flush">
                            {itens?.map((item, index) => (
                                <ListGroup.Item
                                    key={item.id}
                                    className="d-flex justify-content-between align-items-center mb-2 border rounded shadow-sm py-3"
                                    style={{ backgroundColor: '#fff' }}
                                >
                                    <div className="fs-5 text-muted">
                                        <span className="me-2">
                                            {index + 1}.
                                        </span>
                                        {item.nome}
                                    </div>
                                    <div className="d-flex gap-3">
                                        <MdEdit
                                            onClick={() =>
                                                navigate(
                                                    `${rotaEditarBase}/${item.id}`,
                                                )
                                            }
                                            size={22}
                                            className="text-secondary cursor-pointer"
                                            style={{ cursor: 'pointer' }}
                                        />
                                        <MdDelete
                                            size={22}
                                            className="text-danger cursor-pointer"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => {
                                                if (onDeletar)
                                                    onDeletar(item.id);
                                                else
                                                    console.log(
                                                        'Deletar',
                                                        item.id,
                                                    );
                                            }}
                                        />
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>

                <Row className="px-5">
                    <Col>
                        <Button
                            as={Link}
                            to={rotaAdicionar}
                            variant="primary"
                            size="sm"
                            className="d-inline-flex align-items-center gap-1 mt-2 px-3 py-2 shadow-sm"
                        >
                            <MdAddCircle size={18} /> Adicionar
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
}
