import { useState } from "react";

export default function AddPlayerForm(props) {

  const [inputValue, setInputValue] = useState("")

  const updateValue = (event) => {
    setInputValue(event.target.value);
  }

  const insertPlayer = () => {
    props.callbackFn(inputValue);
  }

  return (
    <div id="AddPlayerForm">
      <input 
        type="text"
        placeholder="name"
        value={inputValue}
        onChange={updateValue}
      ></input>
      <button onClick={insertPlayer}>Add</button>
    </div>
  );
}