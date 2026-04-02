import NavBar from '../components/nav_bar/NavBar';
import Footer from '../components/footer/Footer';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import LocalCard from '../components/common/LocalCard';
import { MdArrowBack, MdCheckCircle } from 'react-icons/md';

export default function AdicionarLocal({ campus = 'Campus Restinga' }) {
    return (
        <>
            <NavBar />
            <main className="flex-fill">
                <Container fluid>
                    <Row>
                        <Col
                            xs={12}
                            md={10}
                            lg={8}
                            className="mx-auto d-flex flex-column align-items-center my-5 gap-3"
                        >
                            {<LocalCard />}
                        </Col>
                    </Row>
                    {/*Botoes de ação*/}
                    <Row className="mb-4">
                        <Col className="d-flex justify-content-end">
                            <button className="btn" style={{ backgroundColor: '#6b6d6c', color: 'white' }}>
                                <MdArrowBack size={20} className="me-2" />
                                Voltar
                            </button>
                            <button className="btn" style={{ backgroundColor: '#00A44B', color: 'white' }}>
                                <MdCheckCircle size={20} className="me-2" />
                                Criar Local
                            </button>
                        </Col>
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
