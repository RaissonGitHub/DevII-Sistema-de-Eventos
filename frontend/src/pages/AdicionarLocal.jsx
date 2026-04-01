import NavBar from '../components/nav_bar/NavBar';
import Footer from '../components/footer/Footer';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import LocalCard from '../components/common/LocalCard';
import { MdOutlineSearch } from 'react-icons/md';

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
                            {/* Exemplo de card: Faça um map para gerar outros com dados reais*/}
                            {<LocalCard 
                                titulo="Adicionar Local"
                            />
                            }
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
