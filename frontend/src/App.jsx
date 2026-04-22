import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PermissoesGroups from './pages/PermissoesGrupos';
import PessoasGrupos from './pages/PessoasGrupos';
import PermissoesPessoas from './pages/PermissoesPessoas';
import LocaisEspacosListar from './pages/LocaisEspacosListar';
import LocalForm from './pages/LocalForm';
import LocaisListar from './pages/LocaisListar';
import EspacoForm from './pages/EspacoForm';
import Dashboard from './pages/Dashboard';
import CadastroComplementar from './pages/CadastroComplementar';
import AdicionarEvento from './pages/AdicionarEvento';
import ListarEnvento from './pages/ListarEvento';
import SessionTokenCallback from './pages/SessionTokenCallback';
import Teste from './pages/Teste';
import ModalidadeFormulario from './pages/ModalidadeFormulario';
import ModalidadesListar from './pages/ModalidadesListar';
import DefinirCoordenadorEvento from './pages/DefinirCoordenadorEvento';
import ProtectedRoute from './components/common/ProtectedRoute';
import DefinirOrganizadorEvento from './pages/DefinirOrganizadorEvento';
import AdicionarAtracao from './pages/AdicionarAtracao';
import ListarAtracoes from './pages/ListarAtracoes';
import ListarInscritos from './pages/ListarInscritos';

function App() {
    const ADMIN_GROUPS = ['Administrador', 'Coordenador'];
    const protegido = (rota, gruposPermitidos) => (
        <ProtectedRoute gruposPermitidos={gruposPermitidos}>
            {rota}
        </ProtectedRoute>
    );

    useEffect(() => {
        const { pathname, search, hash } = window.location;
        if (!pathname.startsWith('//')) {
            return;
        }

        const normalizedPathname = `/${pathname.replace(/^\/+/, '')}`;
        window.history.replaceState(
            {},
            document.title,
            `${normalizedPathname}${search}${hash}`,
        );
    }, []);

    return (
        <div className="min-vh-100 d-flex flex-column">
            {/* prettier-ignore */}
            <Routes>
                {/* Publico / Abertas        */}
                <Route path="/" element={<Home />} />
                <Route path="/cadastroComplementar" element={<CadastroComplementar />} />

                {/* Sessao / Autenticacao    */}
                {/* callback para session/token e auth (SSO) */}
                <Route path="/session/token/" element={<SessionTokenCallback />} />
                <Route path="/session/token/*" element={<SessionTokenCallback />} />
                <Route path="/session/auth" element={<SessionTokenCallback />} />
                <Route path="/session/auth/*" element={<SessionTokenCallback />} />

                {/* Eventos (criacao/edicao) */}
                <Route path="/dashboard" element={protegido(<Dashboard />, )} />
                <Route path="/adicionarEvento" element={<AdicionarEvento />} />
                <Route path="/editarEvento/:id" element={<AdicionarEvento />} />
                <Route path="/ListarEventos" element={<ListarEnvento />} />

                {/* Locais & Espacos */}
                <Route path="/adicionarLocal" element={protegido(<LocalForm />, )} />
                <Route path="/editarLocal/:id" element={protegido(<LocalForm />, )} />
                <Route path="/listarLocaisEspacos" element={protegido(<LocaisEspacosListar />, )} />
                <Route path="/listarLocais" element={protegido(<LocaisListar />, )} />
                <Route path="/adicionarEspaco" element={protegido(<EspacoForm />, )} />
                <Route path="/editarEspaco/:id" element={protegido(<EspacoForm />, )} />

                {/* Atracoes & Inscritos */}
                <Route path="/listarAtracoes" element={protegido(<ListarAtracoes />, )} />
                <Route path="/adicionarAtracao" element={protegido(<AdicionarAtracao />, )} />
                <Route path="/listarInscritos" element={protegido(<ListarInscritos />, )} />

                {/* Permissoes / Grupos / Pessoas */}
                <Route path="/permissoesGrupos" element={protegido(<PermissoesGroups />, )} />
                <Route path="/usuarioGrupos" element={protegido(<PessoasGrupos />, )} />
                <Route path="/permissoesPessoas" element={protegido(<PermissoesPessoas />, )} />

                {/* Modalidades      */}
                <Route path="/listarModalidades" element={protegido(<ModalidadesListar />, )} />
                <Route path="/adicionarModalidade" element={protegido(<ModalidadeFormulario />, )} />
                <Route path="/editarModalidade/:id" element={protegido(<ModalidadeFormulario />, )} />

                {/* Atribuicoes / Organizadores */}
                <Route path="/atribuirCoordenador" element={protegido(<DefinirCoordenadorEvento />, )} />
                <Route path="/atribuirOrganizador" element={protegido(<DefinirOrganizadorEvento />, )} />

                {/* Dashboard / Tests / Misc */}
                <Route path="/teste" element={protegido(<Teste />, )} />

            </Routes>
        </div>
    );
}

export default App;
