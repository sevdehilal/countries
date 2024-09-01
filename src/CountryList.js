import React from 'react';
import { Link } from 'react-router-dom';

const CountryList = ({ countries }) => {
  return (
    <div className="country-list">
      {countries.map((country, i) => (
        <div key={i} className="country-card-list">
          <Link to={`/country/${country.alpha3Code}`} className="country-link">
            <h2>{country.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
