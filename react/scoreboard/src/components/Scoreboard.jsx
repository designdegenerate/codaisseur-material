import { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_names(a, b) {
  return a.name.localeCompare(b.name);
}

const randomInt = () => {
  return Math.floor(Math.random() * 100);
};

function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Alice", score: 10 },
    { id: 2, name: "Bob", score: 14 },
    { id: 3, name: "Carl", score: 4000 },
    { id: 4, name: "Denise", score: 42 },
  ]);

  const [sort_by, set_sort_by] = useState("score");

  const sortPlayers = [...players].sort(
    sort_by === "score" ? compare_score : compare_names
  );

  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  const incrementScores = (idToUpdate) => {
    set_players(
      players.map((p) => {
        if (p.id === idToUpdate) {
          return {
            id: p.id,
            name: p.name,
            score: p.score + 1 
          };
        } else {
          return p;
        }
      })
    );
  };

  const reset = () => {
    set_players(
      players.map((p) => {
        return { ...p, score: 0 };
      })
    );
  };

  const random = () => {
    set_players(
      players.map((p) => {
        return { ...p, score: randomInt() };
      })
    );
  };

  const addPlayer = (name) => {
    set_players([...players, { id: players.length + 1, name, score: 0 }]);
  };

  return (
    <div>
      <p>
        <span>Sort Order</span>
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <ol>
        {sortPlayers.map((p) => {
          return (
            <Player
              key={p.id}
              id={p.id}
              name={p.name}
              score={p.score}
              callbackFn={incrementScores}
            />
          );
        })}
      </ol>

      <div className="toolbar">
        <AddPlayerForm callbackFn={addPlayer} />
        <button onClick={reset}>Reset</button>
        <button onClick={random}>Randomize</button>
      </div>
    </div>
  );
}

export default Scoreboard;
