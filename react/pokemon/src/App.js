import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";
const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"]
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"]
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"]
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"]
  }
];

function App(...args: []) {
  return (
        <main className="app">
          <Title
            title="Some Simple Title" />
          <section>
            {all_pokemon.map((pokemon) => (
              <Pokemon
                name={pokemon.name}
                weight={pokemon.weight}
                awesome={pokemon.awesome}
                terrifying={pokemon.terrifying}
                abilities={pokemon.abilities} />
            )
            )}
          </section>
          {/* <Pokemon
              name="Charizard"
              weight={90}
              awesome={true}
              terrifying={false}
              abilities={['Blaze', 'Solar power', 'Tough claws', 'Drought']}
            /> */}
        </main>
  );
}

export default App;
