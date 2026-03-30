import NavBar from '../components/nav_bar/NavBar';
import Footer from '../components/footer/Footer';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import Select from '../components/common/Select';

import { useCsrf } from '../hooks/use_csrf';
import { useGrupos } from '../hooks/use_groups';

export default function PermsGroups({ campus = 'Campus Restinga' }) {    
    const { csrfToken } = useCsrf()
    const { grupos } = useGrupos()

    /*console.log(grupos)*/

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
                            <h1><strong>Painel dos Grupos - Permissões</strong></h1>

                            <div>
                                <h3>Grupo</h3>
                                <Select grupos={grupos}></Select>
                            </div>
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
