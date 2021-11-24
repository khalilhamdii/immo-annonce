import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AnnoncePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [annonce, setAnnonce] = useState({
    title: '',
    price: '',
    description: '',
  });

  const apiGetAnnonce = () => {
    const url = `/api/v1/annonces/${id}`;

    axios
      .get(url)
      .then((response) => {
        if (response.status === 200) {
          setAnnonce(response.data);
        }
      })
      .catch((error) => console.log('error:', error));
  };

  const apiDeleteAnnonce = (id) => {
    const url = `/api/v1/annonces/${id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;
    axios
      .delete(url, {
        headers: {
          'X-CSRF-Token': token,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.data.status === 'deleted') {
          console.log(response.data.message);
          navigate('/');
        }
      })
      .catch((error) => console.log('api errors:', error));
  };

  useEffect(() => {
    apiGetAnnonce();
  }, []);

  return (
    <div className="container px-4 px-lg-5 my-5">
      <Link to="/" className="btn mb-2">
        <i className="bi bi-arrow-left-circle-fill me-2"></i>
        Revenir à l'accueil
      </Link>
      <div className="row gx-4 gx-lg-5 align-items-center">
        <div className="col-md-6">
          <img
            className="card-img-top custom-view-img mb-5 mb-md-0"
            src={annonce.image}
            alt={annonce.title}
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-5 fw-bolder">{annonce.title}</h1>
          <div className="fs-5 mb-5">
            <span>{annonce.price}€</span>
          </div>
          <p className="lead">{annonce.description}</p>
          <div className="btn-group mt-4">
            <Link
              to={`/annonces/edit/${annonce.id}`}
              className="btn btn-outline-dark me-2"
            >
              <i className="bi-pencil-fill me-2" />
              Editer l'annonce
            </Link>
            <button
              onClick={() => apiDeleteAnnonce(annonce.id)}
              className="btn btn-danger"
              type="button"
            >
              <i className="bi bi-trash-fill me-2"></i>
              Supprimer l'annonce
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnoncePage;
