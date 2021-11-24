import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Home from '../components/Home';
import AnnoncePage from '../components/AnnoncePage';
import AddEditForm from '../components/AddEditForm';
import Footer from '../components/Footer';

function App() {
  return (
    <React.StrictMode>
      <div className="d-flex flex-column min-vh-100">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/annonces/:id" exact element={<AnnoncePage />} />
            <Route path="/annonces/new" exact element={<AddEditForm />} />
            <Route path="/annonces/edit/:id" exact element={<AddEditForm />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </React.StrictMode>
  );
}

export default App;
