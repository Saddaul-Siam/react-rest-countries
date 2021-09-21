import React from 'react';

const Country = (props) => {
  const {name,capital,flag,population}= props.country;
  return (
    <div className=''>
      <div className='bg-info m-3 p-3'>
        <img width='500px' height='300px' src={flag} alt="" />
      <h1>Name: {name}</h1>
      <h2>capital: {capital}</h2>
      <h4>capital: {population}</h4>
      </div>
    </div>
  );
};

export default Country;