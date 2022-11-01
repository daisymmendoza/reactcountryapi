import React, { useState, useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then ((resp) => resp.json())
    .then ((data) => setCountries(data))
  }, []);
  return (
    <div className="countries">
      <h3>Total Number of Countries: {countries.length}</h3>
      {countries.map((country) => (
        <Country country={country}></Country>
      ))}
    </div>
  );
}

function Country(props) {
  const {name, capital, flags, region} = props.country;
  return (
    <div className="country">
      <h2>{name.common}</h2>
      <img src={flags.png} alt=""/>
      <h2>Capital: {capital}</h2>
      <h2>Region: {region}</h2>
    </div>
  );
}

export default App;
