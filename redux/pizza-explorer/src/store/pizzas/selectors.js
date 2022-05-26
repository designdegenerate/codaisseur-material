export const getTotalPizzas = (reduxState) => {
  return reduxState.pizzas.allPizzas.length;
}

export const getAllPizzas = (reduxState) => {
  return reduxState.pizzas.allPizzas;
}