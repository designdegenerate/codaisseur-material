

function Player(props) {

  const onClickFn = () => {
    props.callbackFn(props.id);
  }

  return (
    <li className="Player">
        <p>{props.name} (Score: {props.score})</p>
      <button onClick={onClickFn}>Increase!</button>
      <div className='percentageContainer'><div className="percentage" style={{width: props.score + "%"}}></div></div>
    </li>
  );

}

export default Player