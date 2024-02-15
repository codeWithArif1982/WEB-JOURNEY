import React from 'react';
import './Country.css';
const Country = (props) => {
   
  return(
    <div className='divContainer'>
      <h2 className='h2Container'> {props.name}</h2>
      <h2>{props.capital}</h2>
      <h2> {props.flag}</h2>

      
    </div>
  )

};

export default Country;