import React, { useEffect, useState } from 'react';
import AnnonceCard from '../components/AnnonceCard';

const Annonces = () => {
  const [annonces, setAnnonces] = useState([]);

  const getAnnonces = () => {
    const url = '/api/v1/annonces/';
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((response) => setAnnonces(response))
      .catch(() => this.props.history.push('/'));
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
