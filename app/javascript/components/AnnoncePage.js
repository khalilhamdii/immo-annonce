import React from 'react';
import { Link } from 'react-router-dom';

const AnnoncePage = () => {
  return (
    <div className="container px-4 px-lg-5 my-5">
      <Link to="/" className="btn mb-2">
        <i className="bi bi-arrow-left-circle-fill me-2"></i>
        Revenir à l'accueil
      </Link>
      <div className="row gx-4 gx-lg-5 align-items-center">
        <div className="col-md-6">
          <img
            className="card-img-top mb-5 mb-md-0"
            src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
            alt="..."
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-5 fw-bolder">Appartement</h1>
          <div className="fs-5 mb-5">
            <span>$40.00</span>
          </div>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi
            alias magni, accusamus eius blanditiis delectus ipsam minima ea iste
            laborum vero?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnnoncePage;
