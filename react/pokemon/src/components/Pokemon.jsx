export default function Pokemon(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.awesome ? "An awesome Pokemon" : "A sucky Pokemon"}</h3>
      <p>Weight: {props.weight} kg</p>
      <p>Terrifying: {props.terrifying ? "Very" : "Nah, lovable"}</p>
      <p>Abilities ({props.abilities.length})</p>
      <ul>
        {props.abilities.map( (ability, index) => {
          return <li key={index}>{ability}</li>;
        })}
      </ul>
    </div>
  );
}