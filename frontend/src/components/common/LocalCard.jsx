import Card from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function LocalCard({
    titulo,
    corCard = '#016B3F',}) {
        return (
            <Card corBorda= {corCard}>
                
                <Container fluid>
                    <Row>
                        <Col className="d-flex ms-5 mt-5 align-items-center">
                            <h3 className="fw-bold" style={{ color: '#016B3F' }}>
                                {titulo}
                            </h3>
                        </Col>
                        <hr/>

                    </Row>
                    <Row> 
                        <hr/>
                    </Row>

                </Container>
            </Card>     
        )
}