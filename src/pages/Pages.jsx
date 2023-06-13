import React from 'react'
import Home from './Home'
import PeoplePage from './PeoplePage'
import VehiclePage from './VehiclePage'
import Searched from './Searched'
import InfoData from './InfoData'
import VehicleInfo from './VehicleInfo'
import { Route, Routes } from 'react-router-dom'

function Pages() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/characters" element={<PeoplePage />}/>
        <Route path="/vehicles" element={<VehiclePage />}/>
        <Route path="/searched/:search" element={<Searched />} />
        <Route path='/character/:name' element={<InfoData />} />
        <Route path='/vehicle/:id' element={<VehicleInfo />} />
    </Routes>
  )
}

export default Pages
