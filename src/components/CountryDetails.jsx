import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom';


function CountryDetails(props) {
  const { alpha3Code } = useParams();
  


  return (
    <div>
      <h1>Country Details</h1>
      <p>{props.alpha3Code}</p>
    </div>
    
  )
}

export default CountryDetails;