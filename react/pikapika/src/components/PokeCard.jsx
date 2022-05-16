import {Link} from "react-router-dom";

//TODO: parse individual url to generate card

function PokeCard(props) {
  return (
    <li>
      <Link to={"/pokemon/" + props.index}>
        <h3>{props.name}</h3>
      </Link>
    </li>
  )
}

export default PokeCard;