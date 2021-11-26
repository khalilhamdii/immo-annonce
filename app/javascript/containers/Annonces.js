import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AnnonceCard from '../components/AnnonceCard';
import Loader from 'react-loader-spinner';

const Annonces = () => {
  const [annonces, setAnnonces] = useState([]);
  const [loader, setLoader] = useState(true);

  const getAnnonces = () => {
    const url = '/api/v1/annonces/';
    axios
      .get(url)
      .then((response) => {
        if (response.status === 200) {
          setAnnonces(response.data);
          setLoader(false);
        }
      })
      .catch((error) => console.log('error:', error));
  };

  useEffect(() => {
    getAnnonces();
  }, []);

  const RenderAds = () => {
    if (annonces.length > 0) {
      return (
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 ">
          {annonces.map((annonce) => (
            <AnnonceCard key={annonce.id} annonce={annonce} />
          ))}
        </div>
      );
    }
    return (
      <div className="text-center">
        <h1>Pas d'annonces!</h1>
        <Link to="/annonces/new" className="btn btn-outline-dark">
          Ajouter une annonce
        </Link>
      </div>
    );
  };

  return (
    <div className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        {loader ? (
          <div className="d-flex justify-content-center">
            <Loader
              className="text-center"
              type="ThreeDots"
              color="#212529"
              height={100}
              width={100}
            />
          </div>
        ) : (
          <RenderAds />
        )}
      </div>
    </div>
  );
};

export default Annonces;
