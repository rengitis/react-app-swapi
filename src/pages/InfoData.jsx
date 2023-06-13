import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from 'react'

function InfoData() {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [vehicleData, setVehicleData] = useState([]);

    const fetchDetails = async () => {
        const data = await fetch (`https://swapi.dev/api/people/?search=${params.name}`);
        const detailData = await data.json();
        setDetails(detailData.results[0]);

        const vehicles = detailData.results[0].vehicles;
        const vehicleNames = await Promise.all(vehicles.map(async (url) => {
            const response = await fetch(url);
            const vehicle = await response.json();
            return vehicle.name;
        }));

        setVehicleData(vehicleNames);
    }

    useEffect(() => {
        fetchDetails();
    },[params.name]);

    return (
        <div style={{ width: '80%', margin: '0 auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Information about {details.name}</h2>
            <div style={{ display: 'grid', gap: '20px' }}>
                <p><strong>Name:</strong> {details.name}</p>
                <p><strong>Height:</strong> {details.height}cm</p>
                <p><strong>Mass:</strong> {details.mass}kg</p>
                <p><strong>Hair Color:</strong> {details.hair_color}</p>
                <p><strong>Skin Color:</strong> {details.skin_color}</p>
                <p><strong>Eye Color:</strong> {details.eye_color}</p>
                <p><strong>Birth year:</strong> {details.birth_year}</p>
                <p><strong>Gender:</strong> {details.gender}</p>
                <p><strong>Vehicles:</strong> {vehicleData.join(', ')}</p>
            </div>
        </div>
    )
}

export default InfoData
