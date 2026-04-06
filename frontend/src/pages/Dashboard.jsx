import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Badge } from "react-bootstrap";
import { MdDashboard } from "react-icons/md";
import NavBar from "../components/nav_bar/NavBar";
import Footer from "../components/footer/Footer";
import Card from "../components/common/Card";
import { getDashboard } from "../services/dashboardService";

export default function DashboardEvento() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    getDashboard()
      .then(setDados)
      .catch((err) => console.error(err));
  }, []);

  if (!dados) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="success" />
      </div>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <NavBar />

      <main className="flex-fill py-4">
        <Container>

          <Card corBorda="#00A44B">
            <Container fluid className="mb-4 px-4">

              {/* HEADER */}
              <Row className="pt-4 pb-2">
                <Col className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <MdDashboard color="#00A44B" size={32} />
                    <h3 className="fw-bold ms-2 mb-0" style={{ color: "#00A44B" }}>
                      {dados.evento?.nome || "Dashboard do Evento"}
                    </h3>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <Badge bg="secondary">
                      {dados.usuario?.iniciais || "U"}
                    </Badge>
                    <span>{dados.usuario?.nome || "Usuário"}</span>
                  </div>
                </Col>
              </Row>

              <hr />

              {/* MÉTRICAS */}
              <Row className="mb-4">
                <Col md={4}>
                  <CardInfo title="TOTAL DE SUBMISSÕES" value={dados.metricas?.totalSubmissoes || 0} />
                </Col>

                <Col md={4}>
                  <CardInfo title="SEM AVALIADOR" value={dados.metricas?.semAvaliador || 0} danger />
                </Col>

                <Col md={4}>
                  <CardInfo title="DESISTÊNCIAS" value={dados.metricas?.desistencias || 0} />
                </Col>
              </Row>

              {/* STATUS + AÇÕES */}
              <Row>
                <Col md={8}>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h5 className="mb-3">Status das Avaliações</h5>

                    {dados.areas?.map((area, i) => (
                      <ProgressBar key={i} {...area} />
                    ))}
                  </div>
                </Col>

                <Col md={4}>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h5 className="mb-3">Ações</h5>

                    <ul className="list-unstyled">
                      {dados.acoes?.map((acao, i) => (
                        <li key={i} className="mb-2">
                          • {acao}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              </Row>

            </Container>
          </Card>

        </Container>
      </main>

      <Footer
        telefone="(51) 3333-1234"
        endereco="Rua Alberto Hoffmann, 285"
        ano={2026}
        campus="Campus Restinga"
      />
    </div>
  );
}

/* COMPONENTES */

function CardInfo({ title, value, danger }) {
  return (
    <div className={`bg-white p-4 rounded shadow-sm ${danger ? "border border-danger" : ""}`}>
      <p className="text-muted mb-1">{title}</p>
      <h3 className={`fw-bold ${danger ? "text-danger" : ""}`}>
        {value}
      </h3>
    </div>
  );
}

function ProgressBar({ nome, avaliados, total, cor }) {
  const percent = total > 0 ? (avaliados / total) * 100 : 0;

  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between small mb-1">
        <span>{nome}</span>
        <span>{avaliados}/{total}</span>
      </div>

      <div className="progress" style={{ height: "8px" }}>
        <div
          className={`progress-bar ${cor}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}