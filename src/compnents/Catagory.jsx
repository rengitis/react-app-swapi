import { Airplane ,User, House } from "phosphor-react";
import React from 'react'
import { NavLink } from "react-router-dom";

function Catagory() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#f2f2f2', padding: '10px 0' }}>
        <NavLink to={'/'} style={{ textAlign: 'center', color: '#333', textDecoration: 'none' }}>
          <House size={40} weight="duotone" color="#333" />
          <h4>Home</h4>
        </NavLink>
        <NavLink to={'/characters'} style={{ textAlign: 'center', color: '#333', textDecoration: 'none' }}>
          <User size={40} weight="duotone" color="#333" />
          <h4>People</h4>
        </NavLink>
        <NavLink to={'/vehicles'} style={{ textAlign: 'center', color: '#333', textDecoration: 'none' }}>
          <Airplane size={40} weight="duotone" color="#333" />
          <h4>Vehicles</h4>
        </NavLink>
    </div>
  )
}

export default Catagory;
