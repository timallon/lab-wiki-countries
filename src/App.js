import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import { Route, Routes } from 'react-router-dom';
import countriesArr from './countries.json';
import { useState } from 'react';
import CountryDetails from './components/CountryDetails';


function App() {
  const [countries, setCountries] = useState(countriesArr);
  

  return (
    
    <div className="App">
      <Navbar />

      <Routes>
        <Route path={'/countrydetails/:countryId' } element={ <CountryDetails countries={countries} />} />
        <Route path="/" element={ <CountriesList countries={countries} /> } />
      </Routes>
        
      
    </div>
  );
}

export default App;
