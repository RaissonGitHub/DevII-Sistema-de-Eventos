import NavBar from '../components/nav_bar/NavBar';
import Footer from '../components/footer/Footer';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import EventoCard from '../components/common/EventCard';
import { MdOutlineSearch } from 'react-icons/md';
import AtracaoCard from '../components/common/AtracaoCard';

export default function Home({ campus = 'Campus Restinga' }) {
    return (
        <>
            <NavBar></NavBar>
            <main className="flex-fill">
                <Container fluid>
                    <Row>
                        <Col
                            style={{ background: '#059547', padding: '100px' }}
                        >
                            <h1 className="text-white text-center fw-bold">
                                Eventos IFRS {campus}
                            </h1>
                            <p className="text-white text-center fs-5">
                                Acompanhe os principais eventos do IFRS {campus}
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center my-5">
                            {/* Exemplo de card */}
                            {/* <AtracaoCard
                                corCard="#FFC107"
                                hora="8:30"
                                sessao="Sessão 1"
                                titulo="Desenvolvimento de Concreto Sustentável com Resíduos"
                                autores={['Carlos Lima', 'Ana Souza']}
                                local="Sala 304 - Bloco 3"
                                tags={[
                                    {
                                        corFundo: '#3D74FF',
                                        texto: 'Apresentação Oral',
                                        corTexto: '#fff',
                                    },
                                    {
                                        corFundo: '#0DCAF0',
                                        texto: 'Engenharias',
                                        corTexto: '#fff',
                                    },
                                ]}
                            /> */}
                            {/* <EventoCard
                                titulo="Mostra"
                                data="De 20/09 a 22/09"
                                faseAtual="Inscrições abertas"
                                corFase="#106D47"
                                descricao={
                                    'A XIV Mostra Científica conecta estudantes, pesquisadores e comunidade para compartilhar inovação, tecnologia e saberes. Submeta seu trabalho e faça parte.'
                                }
                                textoBotao="Ver Detalhes"
                                icon={MdOutlineSearch}
                            /> */}
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer
                telefone={'(51) 3333-1234'}
                endereco={'Rua Alberto Hoffmann, 285'}
                ano={2026}
                campus={campus}
            ></Footer>
        </>
    );
}
