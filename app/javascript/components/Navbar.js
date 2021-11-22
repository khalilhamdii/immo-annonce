import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <Link to={'/'} className="navbar-brand">
          Immo-Annonce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link to={'/'} className="nav-link active">
                Accueil
              </Link>
            </li>
          </ul>
          <Link to={'/annonces/new'} className="btn btn-outline-dark">
            <i className="bi-plus-square-fill me-2" />
            Ajouter une annonce
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
