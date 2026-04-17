import NavBar from '../components/nav_bar/NavBar';
import Footer from '../components/footer/Footer';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import CriarEventoCard from '../components/common/criarEventoCard';
import Button from 'react-bootstrap/esm/Button';
import { criarEvento, buscarOpcoesFormulario } from '../services/eventoService';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function CriarEvento() {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [status, setStatus] = useState('');
    const [carga_horaria, setCargaHoraria] = useState(0);
    const [setor, setSetor] = useState('');
    const [tema, setTema] = useState('');
    const [opcoes, setOpcoes] = useState({ status: [], setores: [] });
    const [errors,setErrors] = useState({})
    const [exibirSucesso, setExibirSucesso] = useState(false);


    useEffect(() => {
        const carregarDados = async () => {
            const dados = await buscarOpcoesFormulario();
            setOpcoes(dados);
        };
        carregarDados();
    }, []);

    const handleSalvar = async () => {
        setErrors({});
        setExibirSucesso(false)
        {/*if (
            !nome ||
            !descricao ||
            !status ||
            !carga_horaria ||
            !setor ||
            !tema
        ) {
            alert('Por favor, preenche todos os campos');
            return;
        }*/}

        try {
            const novoEvento = {
                nome,
                descricao,
                status_evento: status,
                carga_horaria,
                setor,
                tema,
            };
            await criarEvento(novoEvento);
            setExibirSucesso(true);
            setTimeout(()=>{
                navigate('/');
                setNome('');
                setDescricao('');
                setCargaHoraria(0);
                setStatus('');
                setTema('');
                setSetor('');
            },3000);
            
        } catch (erro) {
           if (erro.response && erro.response.data) {
            setErrors(erro.response.data);
        } else {
            alert('Erro inesperado. Por favor, tente novamente.');
        }
        }
    };

    return (
        <>
            <NavBar />
            <main className="flex-fill">
                <Container className="mx-auto">
                    <Row className="mx-auto my-5 d-flex justify-content-center">
                        <Col className="">
                            {
                                <CriarEventoCard
                                    nome={nome}
                                    setNome={setNome}
                                    descricao={descricao}
                                    setDescricao={setDescricao}
                                    status={status}
                                    setStatus={setStatus}
                                    setor={setor}
                                    setSetor={setSetor}
                                    tema={tema}
                                    setTema={setTema} // Correção aqui
                                    carga_horaria={carga_horaria}
                                    setCargaHoraria={setCargaHoraria} // Correção aqui
                                    errors={errors}
                                    opcoes={opcoes}
                                    exibirSucesso={exibirSucesso}
                                    handleSalvar={handleSalvar}
                                    navigate = {navigate}
                                />
                            }
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    );
}
