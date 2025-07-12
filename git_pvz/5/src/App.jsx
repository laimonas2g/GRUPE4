// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BrowserRouter, NavLink, Routes, Route, Navigate } from "react-router-dom";
import CreateInvoice from './pages/CreateInvoice';
import ListInvoices from './pages/ListInvoices';
import ViewInvoice from './pages/ViewInvoice';
import EditInvoice from './pages/EditInvoice';

import './App.css';
import Home from "./pages/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <ul className="nav-links">
              <NavLink to="/" data-text="Pradžia">Pradžia</NavLink>
              <NavLink to="/list" data-text="Sąskaitų redagavimas">Sąskaitų redagavimas</NavLink>
              <NavLink to="/create" data-text="Nauja Sąskaita">Nauja Sąskaita</NavLink>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateInvoice />} />
          <Route path="/list" element={<ListInvoices />} />
          <Route path="/view/:id" element={<ViewInvoice />} />
          <Route path="/edit/:id" element={<EditInvoice />} />

        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;