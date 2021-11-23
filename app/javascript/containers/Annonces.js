import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AnnonceCard from '../components/AnnonceCard';

const Annonces = () => {
  const [annonces, setAnnonces] = useState([]);

  const getAnnonces = () => {
    const url = '/api/v1/annonces/';
    axios
      .get(url)
      .then((response) => {
        if (response.status === 200) {
          setAnnonces(response.data);
        }
      })
      .catch((error) => console.log('error:', error));
  };

  useEffect(() => {
    getAnnonces();
  }, []);

  return (
    <div className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {annonces.map((annonce) => (
            <AnnonceCard key={annonce.id} annonce={annonce} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Annonces;
