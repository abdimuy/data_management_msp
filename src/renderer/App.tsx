import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Clients from './components/pages/Clients';
import Layout from './components/organisms/Layout';
import Reportes from './components/pages/Reportes';
import Client from './components/pages/Client';
import SearchClient from './components/pages/SearchClient';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/client/:cliente_id" element={<Client />} />
          <Route path="/buscar_cliente" element={<SearchClient />} />
        </Routes>
      </Layout>
    </Router>
  );
}
