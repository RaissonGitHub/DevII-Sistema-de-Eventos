import Card from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdBook } from 'react-icons/md';
import Form from 'react-bootstrap/Form';

export default function LocalCard({
    corCard = '#00A44B',
    Icon, }) {
    return (
        <Card corBorda={corCard}>
            {/* Esse componente está dividido em 3 linhas (Rows) */}
            {/* A primeira contém a título*/}
            {/* A segunda contém o campo de nome*/}
            {/* A terceira contém o campo de endereço */}
            <Container fluid>
                {/* 1 linha título */}
                <Row>
                    <Col className="d-flex ms-5 mt-5 align-items-center">
                        {Icon ? (
                            <Icon size={30} />
                        ) : (
                            <MdBook color={corCard} size={30} />
                        )}
                        <h3 className="fw-bold" style={{ color: corCard }}>
                            Adicionar Local
                        </h3>
                    </Col>
                    <hr />
                {/* 2 linha campo de nome*/}
                </Row>
                <Row className="mb-4">
                    <Col>
                        <Form.Group>
                            <Form.Label className="fw-bold" style={{ color: corCard }}>
                                Nome
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Informe o nome do local"
                                className="border-0 py-3"
                                style={{ backgroundColor: '#eeeeee', borderRadius: '8px' }}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                {/* 3 linha campo de endereço*/}
                <Row className="mb-4">
                    <Col>
                        <Form.Group>
                            <Form.Label className="fw-bold" style={{ color: corCard }}>
                                Endereço
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Informe o endereço do local"
                                className="border-0 py-3"
                                style={{ backgroundColor: '#eeeeee', borderRadius: '8px' }}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}