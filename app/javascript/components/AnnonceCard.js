import React from 'react';
import { Link } from 'react-router-dom';

const AnnonceCard = (props) => {
  const { annonce } = props;
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={annonce.image} alt={annonce.title} />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{annonce.title}</h5>
            {annonce.price}€
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <Link className="btn btn-outline-dark mt-auto" to="/annonces/1">
              Voir annonce
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnonceCard;
