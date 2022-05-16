import "./App.css";
import LikeCounter from "./components/LikeCounter";
import Animals from "./data/animals.json";
import AwesomeAnimals from "./components/AwesomeAnimals";
import "./components/ArticleList";
import ArticleList from "./components/ArticleList";

function App() {

  return (
    <div className="App">
      <main>
        <h1>Some title</h1>
        <LikeCounter />

        <ul>
          {Animals.map( (animal) => {
            return (
              <AwesomeAnimals animal={animal} />
            )

          })}
        </ul>
        <ArticleList />
      </main>
    </div>

  );
}

export default App;