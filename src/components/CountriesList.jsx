import React from 'react'
import { Link } from 'react-router-dom';

const CountriesList = ({countries}) => {
  return (
    <div >
      <div>CountriesList</div>
      {countries.map((country) => {
        return (
          <div>
            <Link key={country.alpha3Code} to={`/countrydetails/${country.alpha3Code}` } >
              {country.name.official}
            </Link>
          </div>
        );
      })}
    </div>
  )
}

export default CountriesList