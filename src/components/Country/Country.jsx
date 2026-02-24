import React from 'react';
import './Country.css'

const Country = ({ country }) => {
//    console.log(country)   
    const handleVisited=()=>{
        console.log('onclick now')
    }
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>{country.name.common}</h2>
            <p>{country.population.population}</p>
            <p>{country.languages.languages.eng}</p>
            <p>Area : {country.area.area} {country.area.area > 300000 ? "(Big Country)" : "(Small Country) "}</p>
            <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
};

export default Country;