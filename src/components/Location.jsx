import axios from "axios";
import ResidentInfo from "./ResidentInfo";
import { useEffect, useState } from "react";

const Location = () => {
  const [location, setLocation] = useState({})
  const [id, setId] = useState(Math.floor(1 + Math.random()*126)) 
  useEffect( () => {
    axios.get(`https://rickandmortyapi.com/api/location/${id}`)
         .then( (resp) => {
          console.log(resp.data)
          setLocation(resp.data)
        } )
         .catch( (error) => console.log(error) )
  }, [])

  const anotherLocation = (e) => {
    axios.get(`https://rickandmortyapi.com/api/location/${id}`)
         .then( (resp) => {
          console.log(resp.data)
          setLocation(resp.data)
        } )
         .catch( (error) => console.log(error) )
         e.preventDefault()
  }


  return (
    <div className="container">
      <form onSubmit={ (e) => anotherLocation(e) } className="search">
        <input 
        placeholder="Type a location ID..."
        onChange={ (e) => setId(e.target.value) }
        className="search__input" type="text" id=""/>
        <button type="submit" className="search__button btn"><i className='bx bx-search'></i></button>
      </form>
      <section className="location">
        <div className="location__container">
          <article className="location__property">
            <h1 className="location__property--title">Name</h1>
            <span className="location__property--value">{location.name}</span>
          </article>
          <article className="location__property">
            <h2 className="location__property--title">Type</h2>
            <span className="location__property--value">{location.type}</span>
          </article>
          <article className="location__property">
            <h2 className="location__property--title">Dimension</h2>
            <span className="location__property--value">{location.dimension}</span>
          </article>
          <article className="location__property">
            <h2 className="location__property--title">Citizens</h2>
            <span className="location__property--value">{location.residents?.length}</span>
          </article>
        </div>
      </section>
      <p className="welcome">Welcome to the crazy universe!</p>
      <section className="residents">
          {
            location.residents?.map( (item) => {
              return (
                <ResidentInfo
                key={item}
                urlCharacter = {item}
                /> )
            }
            )
          }
      </section>
    </div>
  );
};

export default Location;
