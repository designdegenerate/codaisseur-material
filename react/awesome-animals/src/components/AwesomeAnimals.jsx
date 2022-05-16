const AwesomeAnimals = (props) => {
  const { name, level } = props.animal;

  return (
    <li key={name}>
      Awesomeness level <span>{level}</span>: {name}
    </li>
  )
}

export default AwesomeAnimals