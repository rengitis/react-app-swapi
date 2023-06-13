import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function People() {
  const [people, setPeople] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://swapi.dev/api/people")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] =useState(true)

  useEffect(() => {
    getPeople();
  }, [currentPageUrl]);

  const getPeople = async () => {
    
    try {
      setLoading(true)
      const api = await fetch(currentPageUrl);
      const data = await api.json();
      setLoading(false)
      setNextPageUrl(data.next)
      setPrevPageUrl(data.previous)
      setPeople(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function gotoNextPage(){
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage(){
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return "Loading..."

  return (
    <div style={{ textAlign: 'center' }}>
      <h3 style={{ marginTop: '20px' , marginBottom: '20px'}}>Characters</h3>
      {people.map((results) => {
        return(
          <div key={results.url} style={{ marginBottom: '5px', padding: '10px', border: '1px solid #333', width: '250px', display: 'inline-block', margin: '10px' }}>
            <Link to={"/character/" + results.name} style={{ textDecoration: 'none', color: '#000', fontSize: '0.8rem' }}>
              <p>{results.name}</p>
            </Link>
          </div>
        );
      })}
      <div style={{ marginTop: '20px' , marginBottom: '20px'}}>
        {prevPageUrl && <button onClick={gotoPrevPage} style={{ marginRight: '10px', padding: '10px 20px' }}>Previous</button>}
        {nextPageUrl && <button onClick={gotoNextPage} style={{ padding: '10px 20px' }}>Next</button>}
      </div>
    </div>
  );  
}

export default People;
