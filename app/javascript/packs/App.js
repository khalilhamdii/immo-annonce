import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../components/Home';
import Annonce from '../components/Annonce';
import AnnonceForm from '../components/AnnonceForm';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/annonces/:id" exact element={<Annonce />} />
          <Route path="/annonces/new" exact element={<AnnonceForm />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
