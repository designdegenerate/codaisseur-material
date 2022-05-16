import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PokeCard from "../components/PokeCard";

function DiscoverPage(props) {
  const [getInputvalue, setInputValue] = useState("")
  const navigate = useNavigate();
  const updateValue = (event) => {
    setInputValue(event.target.value);
    navigate(`/discover/${getInputvalue}`);
  }
 
  return (
    <div>
      <h2>Pokemon are coolio</h2>
      <input value={getInputvalue} type="text" onChange={updateValue}></input>
      <ul>
        {props.pokemon
        .filter(
          pokemon => pokemon.name.startsWith(getInputvalue)
        )
        .map( (poke, index) => {
          return (<PokeCard index={index} key={index} name={poke.name} /> )
        })}
      </ul>
    </div>
  )
};


export default DiscoverPage;