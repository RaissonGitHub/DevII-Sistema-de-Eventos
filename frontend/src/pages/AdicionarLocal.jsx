import NavBar from '../components/nav_bar/NavBar';
import Footer from '../components/footer/Footer';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import LocalCard from '../components/common/LocalCard';
import Button from 'react-bootstrap/esm/Button';
import { MdArrowBack, MdCheckCircle } from 'react-icons/md';

export default function AdicionarLocal({ campus = 'Campus Restinga' }) {
    return (
        <>
            <NavBar />
            <main className="flex-fill">
                <Container className="mx-auto">
                    <Row className="mx-auto my-5 d-flex justify-content-center">
                        <Col className="">
                            {<LocalCard />}
                            <Row className="my-3">
                                <Col className="d-flex justify-content-end gap-3">
                                    <Button
                                        size="lg"
                                        variant="secondary"
                                        className="fw-bold"
                                    >
                                        <MdArrowBack
                                            size={20}
                                            className="me-2"
                                        />
                                        Voltar
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="success"
                                        className="fw-bold"
                                        style={{
                                            backgroundColor: '#00A44B',
                                            border: 'none',
                                        }}
                                    >
                                        <MdCheckCircle
                                            size={20}
                                            className="me-2"
                                        />
                                        Criar Local
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {/*Botoes de ação*/}
                    <Row className="mb-4 mx-auto d-flex">
                        <Col></Col>
                    </Row>
                </Container>
            </main>
            {/* Mude esses dados posteriormente */}
            <Footer
                telefone={'(51) 3333-1234'}
                endereco={'Rua Alberto Hoffmann, 285'}
                ano={2026}
                campus={campus}
            />
        </>
    );
}
