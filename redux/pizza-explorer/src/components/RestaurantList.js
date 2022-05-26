import { useState } from "react";
import { useSelector } from "react-redux";
import { getAllPizzas } from "../store/pizzas/selectors";
import { getAllRestaurants } from "../store/restaurants/selectors";

// import { getAllRestaurants, selectRestaurantsThatSellPizza } from "../store/restaurants/selectors";

export default function RestaurantList() {
  const restaurants = useSelector(getAllRestaurants);
  const pizzas = useSelector(getAllPizzas);
  const [getOptionValue, setOptionValue] = useState("");
  // const sellsPizza = useSelector(selectRestaurantsThatSellPizza(getOptionValue));

  return (
    <div>
      <ul>
        {restaurants.map((restaurant) => {
          return (
            <li>
              {restaurant.name}
              <ul>
                {restaurant.pizzas.map((pizza) => {
                  return (
                    <li>
                      <h3>{pizza.name}</h3>
                      <p>{pizza.description}</p>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
      <select
      value={getOptionValue}
      onChange={
        (event) => {
          setOptionValue(event.target.value);
        }
      }>
        <option value="">--</option>
        {pizzas.map(
          pizza => {
            return (
              <option value={pizza.name}>{pizza.name}</option>
            )
          }
        )}
      </select>
      <ul>
      </ul>

    </div>
  );
}
