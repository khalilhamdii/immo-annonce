import React from 'react';
import { Link } from 'react-router-dom';

const AnnonceForm = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-lg-8 offset-lg-2">
          <h1 className="font-weight-normal mb-5">
            Ajouter une nouvelle annonce!
          </h1>
          <form>
            <div className="form-group my-4">
              <label htmlFor="annonceTitle">Titre de l'annonce</label>
              <input
                type="text"
                name="name"
                id="annonceTitle"
                className="form-control"
                required
              />
            </div>
            <div className="form-group my-4">
              <label htmlFor="annoncePrice">Prix</label>
              <input
                type="text"
                name="ingredients"
                id="annoncePrice"
                className="form-control"
                required
              />
            </div>
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="5"
              required
            />
            <button type="submit" className="btn btn-dark mt-3 me-2">
              Créer l'annonce
            </button>
            <Link to="/" className="btn btn-outline-dark mt-3">
              Revenir vers l'accueil
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AnnonceForm;
