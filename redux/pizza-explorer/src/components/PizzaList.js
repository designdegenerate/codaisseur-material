import { useDispatch, useSelector } from "react-redux";
import selectUser from "../store/user/selectors";
import { getTotalPizzas, getAllPizzas } from "../store/pizzas/selectors";
import { modifyFavorite } from "../store/user/slice";

export default function PizzaList() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const totalPizzas = useSelector(getTotalPizzas);
  const allPizzas = useSelector(getAllPizzas);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>Welcome back {user.name}!</p>
      <p>There are {totalPizzas} pizzas!</p>
      <ul>
        {[...allPizzas]
        .sort((a,b) => b.bought - a.bought )
        .map( pizza => {
          return (
            <li key={pizza.id} id={pizza.id}>
              <h2>{pizza.name}</h2>
              <p>{pizza.description}</p>
              <p>bought {pizza.bought} times</p>
              <input type='checkbox' onChange={(event) => {
                  dispatch(modifyFavorite(pizza.id))
                }}
                
                checked={
                user.favorites.find(id => pizza.id === id) ? true : false
                } ></input>
            </li>
          )
        })}
      </ul>
    </div>
  );
}