import NavBar from '../components/nav_bar/NavBar';
import Footer from '../components/footer/Footer';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import Select from '../components/common/Select';
import TableItem from '../components/common/Table';

import { useCsrf } from '../hooks/use_csrf';
import { useGrupos } from '../hooks/use_groups';
import { usePermissoes } from '../hooks/use_perms';
import { useGroupPermissions } from '../hooks/use_group_permissions';

export default function PermsGroups({ campus = 'Campus Restinga' }) {
    const { csrfToken } = useCsrf();
    const { grupos } = useGrupos();
    const { perms } = usePermissoes();

    const {
        selectedGroupId,
        setSelectedGroupId,
        permsDoGrupo,
        permsNaoDoGrupo,
        loading,
        message,
        setMessage,
        handleAddPermission,
        handleRemovePermission,
        handleSave,
        handleReset
    } = useGroupPermissions(perms);

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
                            <h1>
                                <strong>Painel dos Grupos - Permissões</strong>
                            </h1>

                            <div style={{ width: '100%' }}>
                                <h3>Grupo</h3>
                                <Select
                                    grupos={grupos}
                                    value={selectedGroupId}
                                    onChange={(event) => setSelectedGroupId(event.target.value)}
                                />
                            </div>

                            {message && (
                                <Alert
                                    variant={message.type}
                                    onClose={() => setMessage('')}
                                    dismissible
                                >
                                    {message.text}
                                </Alert>
                            )}

                            {selectedGroupId && (
                                <>
                                    <hr style={{ width: '100%' }} />

                                    <div style={{ width: '100%' }}>
                                        <h4>Permissões do grupo</h4>
                                        <TableItem
                                            itens={permsDoGrupo}
                                            titulo="Pertence ao grupo"
                                            renderItem={(item) => (
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <span>{item.name}</span>
                                                    <Button
                                                        size="sm"
                                                        variant="danger"
                                                        onClick={() => handleRemovePermission(item.id)}
                                                        disabled={loading}
                                                    >
                                                        Remover
                                                    </Button>
                                                </div>
                                            )}
                                        />
                                    </div>

                                    <div style={{ width: '100%' }}>
                                        <h4>Permissões que o grupo não possui</h4>
                                        <TableItem
                                            itens={permsNaoDoGrupo}
                                            titulo="Não pertence ao grupo"
                                            renderItem={(item) => (
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <span>{item.name}</span>
                                                    <Button
                                                        size="sm"
                                                        variant="success"
                                                        onClick={() => handleAddPermission(item.id)}
                                                        disabled={loading}
                                                    >
                                                        Adicionar
                                                    </Button>
                                                </div>
                                            )}
                                        />
                                    </div>

                                    <div
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            gap: '10px',
                                            justifyContent: 'center',
                                            marginTop: '20px'
                                        }}
                                    >
                                        <Button
                                            variant="primary"
                                            onClick={handleSave}
                                            disabled={loading}
                                        >
                                            {loading ? 'Salvando...' : 'Salvar Alterações'}
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            onClick={handleReset}
                                            disabled={loading}
                                        >
                                            Cancelar
                                        </Button>
                                    </div>
                                </>
                            )}

                            <div>
                                <small>CSRF token carregado: {csrfToken ? 'Sim' : 'Não'}</small>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer telefone="(51) 3333-1234" endereco="Rua Alberto Hoffmann, 285" ano={2026} campus={campus} />
        </>
    );
}
