import { useState } from "react";
import "./App.css";
import imageRickMorty from "./img/rick-morty.png";
import Character from "./components/Character";

function App() {
  const [characters, setCharacters] = useState(null);
  const searchCharacters = async () => {
    const apiResult = await fetch("https://rickandmortyapi.com/api/character");
    const result = await apiResult.json();
    setCharacters(result.results);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Character characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img
              className="img-home"
              alt="rick-morty"
              src={imageRickMorty}
            ></img>
            <button className="btn-search" onClick={searchCharacters}>
              Buscar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
