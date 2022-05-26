import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { deposit, widthdraw, reset } from "./store/balance/slice";
import { selectbalance } from "./store/balance/selectors";

function App() {
  const dispatch = useDispatch();
  const balance = useSelector(selectbalance);
  const [getInputValue, setInputValue] = useState(0);

  const setCustomAmount = (event) => {
    event.preventDefault();
    dispatch(deposit(getInputValue));
  }

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>
      <button
        onClick={() => {
          dispatch(widthdraw(10));
        }}
      >
        Widthdraw 10$
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <form onSubmit={(event) => setCustomAmount(event)}>
        <label htmlFor="customField">Set custom amount</label>
        <input id="customField" onChange={(event) => { setInputValue(parseInt(event.target.value))}} value={getInputValue} type="text"></input>
        <button type="submit" >Set</button>
      </form>
    </div>
  );
}

export default App;