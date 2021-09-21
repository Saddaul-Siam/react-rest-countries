import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
  const [countries, setCountries]=useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data=>setCountries(data))
  },[])
  return (
    <div>
      <div style={{padding:'20px'}}>
      <h1>Traveling around the world</h1>
      <h2>Available Countries :{countries.length}</h2>
      </div>
      <div className='countries-containet'>
          {
            countries.map(country=><Country country={country}></Country>)
          }
      </div>
    </div>
  );
};

export default Countries;<h1>This is Countries own file</h1>