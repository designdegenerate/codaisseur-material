import {useParams} from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import {useEffect} from "react";
/*
 * TODO
 * 2. Get params from URL right here
 * 3. use that to make another API call
 * 4. Parse that data and render
 * https://pokeapi.co/api/v2/pokemon/1/
 */

function PokeDetails(props) {
  const routeParams = useParams();
  let [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const getData = async () => {
      let response;
      try {
        response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${routeParams.pokeID}/`
        );
      } catch (error) {
        console.log(error);
      }
      setPokemon(response.data);
    };
    getData();
  }, []);

  return (
    <div>
      { pokemon ? (
        <div>
          <h3>{pokemon.name}</h3>
          <img alt='' src={pokemon.sprites.front_default} ></img>
          <dl>
            <dt>Base Experience</dt>
            <dd>{pokemon.base_experience}</dd>
            <dt>Weight</dt>
            <dd>{pokemon.weight}</dd>
          </dl>
        </div>
      ) : (
      <p>loading</p>
      )}
    </div>
  )

}

export default PokeDetails