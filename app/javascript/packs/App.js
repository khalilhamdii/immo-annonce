import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Annonce from '../components/Annonce';
import AnnonceForm from '../components/AnnonceForm';
import Footer from '../components/Footer';

function App() {
  return (
    <React.StrictMode>
      <div className="d-flex flex-column min-vh-100">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/annonces/:id" exact element={<Annonce />} />
            <Route path="/annonces/new" exact element={<AnnonceForm />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </React.StrictMode>
  );
}

export default App;
