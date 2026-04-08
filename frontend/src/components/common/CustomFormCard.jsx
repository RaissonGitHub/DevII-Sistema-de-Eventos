import { useState, useRef } from 'react';
import Card from './Card';
import { Container, Row, Col, Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import { InputGroup } from 'react-bootstrap';
import { MdEdit } from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';

export default function CustomFormCard({
    sessao,
    titulo = '',
    Icone,
    corTexto = '',
    orientacao = 'column',
    campos = [],
}) {
    const [selecoes, setSelecoes] = useState({});
    const [entradasDatalist, setEntradasDatalist] = useState({});
    const [mostrarDatalist, setMostrarDatalist] = useState({});
    const refsInput = useRef({});
    function identificarTipo(obj) {
        const tipo = obj?.tipo;
        if (tipo === 'text') {
            return <input type={'text'} className="form-control" />;
        } else if (tipo === 'select') {
            return (
                <Form.Select
                    aria-label="Default select example"
                    defaultValue={'#'}
                >
                    {obj?.opcoes.map((opcao, i) => (
                        <option
                            key={i}
                            value={opcao.value}
                            disabled={opcao?.disabled}
                        >
                            {opcao.text}
                        </option>
                    ))}
                </Form.Select>
            );
        } else if (tipo === 'button link') {
            return (
                <Button
                    variant={obj?.variant}
                    className="border-0 mt-2"
                    style={{ background: obj?.background }}
                >
                    <Link
                        to={obj?.to}
                        className="text-decoration-none text-white"
                    >
                        {obj?.text}
                    </Link>
                </Button>
            );
        } else if (tipo === 'file') {
            return <input type={'file'} className="form-control mt-1" />;
        } else if (tipo === 'datalist') {
            const key = obj?.list;

            function adicionarSelecao(opcao) {
                setSelecoes((prev) => {
                    const existentes = prev[key] || preSelecionadas || [];
                    if (
                        existentes.find(
                            (e) => String(e.value) === String(opcao.value),
                        )
                    )
                        return prev;
                    return { ...prev, [key]: [...existentes, opcao] };
                });
                setEntradasDatalist((prev) => ({ ...prev, [key]: '' }));
            }

            function removerSelecao(value) {
                setSelecoes((prev) => {
                    const existentes = prev[key] || preSelecionadas || [];
                    return {
                        ...prev,
                        [key]: existentes.filter(
                            (e) => String(e.value) !== String(value),
                        ),
                    };
                });
            }

            const preSelecionadas = obj?.areas || [];
            const selecionados =
                selecoes[key] && selecoes[key].length > 0
                    ? selecoes[key]
                    : preSelecionadas;

            const opcoesDisponiveis = obj?.opcoes || [];

            return (
                <>
                    <InputGroup
                        className="mb-2 d-flex gap-2"
                        style={{ position: 'relative' }}
                    >
                        {selecionados.map((item, i) => (
                            <div
                                className=" w-100 rounded-2 d-flex  align-items-center justify-content-between px-5 form-control"
                                key={i}
                            >
                                <span className="">
                                    {i + 1}. {item.text ?? item.value}
                                </span>
                                <div className="d-flex  justify-content-end flex-row">
                                    <Button
                                        variant="link"
                                        className="btn btn-link text-danger"
                                        onClick={() =>
                                            removerSelecao(item.value)
                                        }
                                    >
                                        <BsTrash size={20} />
                                    </Button>
                                </div>
                            </div>
                        ))}

                        <div className="d-flex gap-2 w-100">
                            <div
                                style={{ position: 'relative', width: '100%' }}
                            >
                                <Form.Control
                                    ref={(el) => (refsInput.current[key] = el)}
                                    placeholder={obj?.placeholder || 'Nome'}
                                    value={entradasDatalist[key] || ''}
                                    onChange={(e) =>
                                        setEntradasDatalist((prev) => ({
                                            ...prev,
                                            [key]: e.target.value,
                                        }))
                                    }
                                    onFocus={() =>
                                        setMostrarDatalist((prev) => ({
                                            ...prev,
                                            [key]: true,
                                        }))
                                    }
                                    onBlur={() =>
                                        setTimeout(
                                            () =>
                                                setMostrarDatalist((prev) => ({
                                                    ...prev,
                                                    [key]: false,
                                                })),
                                            150,
                                        )
                                    }
                                />

                                {mostrarDatalist[key] &&
                                    (entradasDatalist[key]
                                        ? opcoesDisponiveis.filter((o) =>
                                              String(o.text)
                                                  .toLowerCase()
                                                  .includes(
                                                      String(
                                                          entradasDatalist[key],
                                                      ).toLowerCase(),
                                                  ),
                                          )
                                        : opcoesDisponiveis
                                    ).length > 0 && (
                                        <div
                                            className="list-group position-absolute bg-white overflow-y-auto top-100"
                                            style={{
                                                left: 0,
                                                right: 0,
                                                zIndex: 1050,
                                                maxHeight: 200,
                                            }}
                                        >
                                            {(entradasDatalist[key]
                                                ? opcoesDisponiveis.filter(
                                                      (o) =>
                                                          String(o.text)
                                                              .toLowerCase()
                                                              .includes(
                                                                  String(
                                                                      entradasDatalist[
                                                                          key
                                                                      ],
                                                                  ).toLowerCase(),
                                                              ),
                                                  )
                                                : opcoesDisponiveis
                                            ).map((opcao, idx) => (
                                                <button
                                                    key={idx}
                                                    type="button"
                                                    className="list-group-item list-group-item-action"
                                                    onMouseDown={() => {
                                                        setEntradasDatalist(
                                                            (prev) => ({
                                                                ...prev,
                                                                [key]:
                                                                    opcao.text ??
                                                                    opcao.value,
                                                            }),
                                                        );
                                                        setMostrarDatalist(
                                                            (prev) => ({
                                                                ...prev,
                                                                [key]: false,
                                                            }),
                                                        );
                                                    }}
                                                >
                                                    {opcao.text ?? opcao.value}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                            </div>

                            <input
                                type="button"
                                value="Adicionar"
                                className="btn btn-success"
                                onClick={() => {
                                    const match = opcoesDisponiveis.find(
                                        (o) =>
                                            String(o.text).toLowerCase() ===
                                            String(
                                                entradasDatalist[key] || '',
                                            ).toLowerCase(),
                                    );
                                    if (match) adicionarSelecao(match);
                                }}
                            />
                        </div>
                    </InputGroup>
                </>
            );
        }
    }

    return (
        <>
            <Card corBorda={corTexto}>
                <Container>
                    <Row>
                        <Col
                            className="ms-4 mt-4 d-flex align-items-center"
                            style={{ color: corTexto }}
                        >
                            {Icone}
                            <h2 className="mb-0 ms-3 fw-bold">{titulo}</h2>
                        </Col>
                    </Row>
                    <hr className="mx-4" />
                    <Row>
                        <Col className="mx-4 d-flex flex-column gap-2">
                            {campos.map((item, i) =>
                                !Array.isArray(item) ? (
                                    <div key={i}>
                                        <span
                                            className="fw-bold"
                                            style={{ color: corTexto }}
                                        >
                                            {item.titulo}
                                        </span>
                                        {identificarTipo(item)}
                                    </div>
                                ) : (
                                    <div key={i}>
                                        {item.map((campo, index) => (
                                            <div key={index}>
                                                <span
                                                    className="fw-bold"
                                                    style={{ color: corTexto }}
                                                >
                                                    {campo.titulo}
                                                </span>
                                                {identificarTipo(campo)}
                                            </div>
                                        ))}
                                    </div>
                                ),
                            )}
                        </Col>
                    </Row>
                </Container>
            </Card>
        </>
    );
}
