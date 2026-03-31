import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PermsGroups from './pages/PermissoesGrupos';

function App() {
    return (
        <div className="min-vh-100 d-flex flex-column">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/permissoesGrupos" element={<PermsGroups />} />
            </Routes>
        </div>
    );
}

export default App;
