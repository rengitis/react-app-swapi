import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Searched() {
    const [searched, setSearched] = useState([])
    let params = useParams();

    const getSearched = async (name) => {
        const peopleResponse = await fetch(`https://swapi.dev/api/people/?search=${name}`);
        const peopleData = await peopleResponse.json();
        peopleData.results.forEach(item => {
            item.type = 'character';
        });

        const vehicleResponse = await fetch(`https://swapi.dev/api/vehicles/?search=${name}`);
        const vehicleData = await vehicleResponse.json();
        vehicleData.results.forEach(item => {
            item.type = 'vehicle';
            item.id = item.url.match(/\d+/)[0];
        });

        const combinedData = [...peopleData.results, ...vehicleData.results];
        setSearched(combinedData);
    }

    useEffect(() => {
        getSearched(params.search);
    },[params.search]);

    return (
        <div style={{ textAlign: 'center' }}>
            <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>Searched</h3>
            {searched.map((results) => {
                return(
                    <div key={results.url} style={{ marginBottom: '10px', padding: '5px', border: '1px solid #333', borderRadius: '100px', width: '250px', margin: 'auto' }}>
                        {results.type === 'character' ? (
                            <Link to={"/character/" + results.name} style={{ textDecoration: 'none', color: '#000' }}>
                                <p>{results.name}</p>
                            </Link>
                        ) : (
                            <Link to={"/vehicle/" + results.id} style={{ textDecoration: 'none', color: '#000' }}>
                                <p>{results.name}</p>
                            </Link>
                        )}
                    </div>
                );
            })}
        </div>
    );  
}

export default Searched
