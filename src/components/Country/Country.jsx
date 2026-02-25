import React, { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    //    console.log(country)   
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        //    if(visited){
        //     setVisited(false)
        //    }
        //    else{
        //     setVisited(true)
        //    }

        // or 

        // setVisited(visited ? false : true)

        // or 

        setVisited(!visited)
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>{country.name.common}</h2>
            <p>{country.population.population}</p>
            <p>{country.languages.languages.eng}</p>
            <p>Area : {country.area.area} {country.area.area > 300000 ? "(Big Country)" : "(Small Country) "}</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;