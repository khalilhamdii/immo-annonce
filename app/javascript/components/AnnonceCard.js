import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AnnonceCard = (props) => {
  const { annonce } = props;
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img
          className="card-img-top custom-card-img"
          src={annonce.image}
          alt={annonce.title}
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{annonce.title}</h5>
            {annonce.price}€
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <Link
              className="btn btn-outline-dark mt-auto"
              to={`/annonces/${annonce.id}`}
            >
              Voir annonce
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

AnnonceCard.propTypes = {
  annonce: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.integer,
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default AnnonceCard;
