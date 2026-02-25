import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ AllCountriesData }) => {
    const countriesData = use(AllCountriesData);
    const countries = countriesData.countries;
    // console.log(countries)

    const [visitedCountry, setVisitedCountry] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountry = (country) => {
        // console.log('This Country Is Visited', country);
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry)
    }

    const handleVisitedFlags = (flags) => {
        console.log('this is visited flags', flags);
        const newVisitedFlags = [...visitedFlags, flags];
        setVisitedFlags(newVisitedFlags);
    }
    return (
        <div>
            <h1>In the Countries : {countries.length}</h1>
            <h2>In the Visited Countries : {visitedCountry.length}</h2>
            <h2>In the Visited Flags : {visitedFlags.length}</h2>
            <div >
                {
                    visitedCountry.map(country => <li
                        key={country.cca3.cca3}
                    >{country.name.common}</li>)
                }
            </div>
            <div className='visited-flag'>
                {
                    visitedFlags.map(flags => <img src={flags}></img>)
                }
            </div>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedFlags={handleVisitedFlags}
                        handleVisitedCountry={handleVisitedCountry}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;