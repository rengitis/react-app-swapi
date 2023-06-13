import React from 'react'
import { useState } from 'react'
import { MagnifyingGlass } from 'phosphor-react'
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/star-wars-logo.png"

function Search() {

    const [input, setInput] = useState("");

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input)
    };

  return (
    <>
    <img src={Logo} style={{ width: '100px', height: 'auto', display: 'block', margin: '0 auto' }}/>
    <form onSubmit={submitHandler} style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
        <div style={{ display: 'flex', border: '1px solid #333', borderRadius: '50px', padding: '10px' }}>
          <MagnifyingGlass color="#333" />
          <input 
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            style={{ marginLeft: '10px', border: 'none', outline: 'none' }}/>
        </div>
    </form>
    </>
  )
}

export default Search
