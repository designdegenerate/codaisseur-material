import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import DiscoverPage from "./pages/DiscoverPage";
import HomePage from "./pages/HomePage";
import PokeDetails from "./pages/PokeDetails";

function App() {
  const [getPokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response;
      try {
        response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=150"
        );
      } catch (error) {
        console.log(error);
      }
      
      setPokemon(response.data.results);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <h1>Pika Pika!</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/discover" element={
            <DiscoverPage pokemon={getPokemon} /> 
          }>
            <Route path="/discover/:filter" element={
              <DiscoverPage pokemon={getPokemon} />
             } />
          </Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pokemon/:pokeID" element={<PokeDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
