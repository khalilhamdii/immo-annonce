import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Annonces immobilières</h1>
          <p className="lead fw-normal text-white-50 mb-0">
            Appartements - Villas - Terrains - Fonds de commerce - Fermes -
            Consultez notre site. Vente/Location
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
