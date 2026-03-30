import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PermsGroups from './pages/PermsGroups';

function App() {
    return (
        <div className="min-vh-100 d-flex flex-column">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/permsGroups" element={<PermsGroups />} />
            </Routes>
        </div>
    );
}

export default App;
