import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const { code } = useParams();
  const country = countries.find(country => country.alpha3Code === code);

  return (
    <div className="country-details">
      {country ? (
        <div className="country-card-details">
          <img 
            src={country.flags.svg} 
            alt={`${country.name} flag`} 
            className="country-flag" 
          />
          <h1>{country.name}</h1>
          <p><strong>Capital:</strong> {country.capital}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Languages:</strong> {country.languages.map(lang => lang.name).join(', ')}</p>
        </div>
      ) : (
        <div>Ülke bulunamadı.</div>
      )}
    </div>
  );
};

export default CountryDetails;
