import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from 'react'

function VehicleInfo() {
    let params = useParams();
    const [details, setDetails] = useState({});

    const fetchDetails = async () => {
        const data = await fetch (`https://swapi.dev/api/vehicles/${params.id}`);
        const detailData = await data.json();
        setDetails(detailData);
    }

    useEffect(() => {
        fetchDetails();
    },[params.id]);

    return (
        <div style={{ width: '80%', margin: '0 auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Information about {details.name}</h2>
            <div style={{ display: 'grid', gap: '20px' }}>
                <p><strong>Name:</strong> {details.name}</p>
                <p><strong>Model:</strong> {details.model}</p>
                <p><strong>Manufacturer:</strong> {details.manufacturer}</p>
                <p><strong>Cost in credits:</strong> {details.cost_in_credits}</p>
                <p><strong>Length:</strong> {details.length}</p>
                <p><strong>Max speed:</strong> {details.max_atmosphering_speed}</p>
                <p><strong>Crew:</strong> {details.crew}</p>
                <p><strong>Passengers:</strong> {details.passengers}</p>
            </div>
        </div>
    )
}

export default VehicleInfo
