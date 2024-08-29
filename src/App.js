import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryList from './CountryList';
import CountryDetails from './CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => setCountries(response.data))
      .catch(error => console.log({ error }));
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={<CountryList countries={countries} />} 
          />
          <Route 
            path="/country/:code" 
            element={<CountryDetails countries={countries} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
