export const getAllRestaurants = (reduxState) => {
  const pizzas = reduxState.pizzas.allPizzas

  return reduxState.restaurants.all.map((restaurant) => {

    const mappedPizzas = restaurant.pizzas.map((currentPizza) => {
      return pizzas.find(
        (pizza) => {
          return pizza.id === currentPizza;
        }
      );
    })

    return {...restaurant, pizzas: [
      ...mappedPizzas
    ]}
  
  });
};

export const selectRestaurantsThatSellPizza = (pizzaId) => (reduxState) => {
  // your logic goes here
};