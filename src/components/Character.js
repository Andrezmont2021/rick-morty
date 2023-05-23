export default function Character(props) {
  const { characters, setCharacters } = props;

  const resetCharactersToBackHome = () => {
    setCharacters(null);
  };

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharactersToBackHome}>
        Volver al home
      </span>
      <div className="container-characters">
        {characters.map((character) => (
          <div className="character-container" key={character.id}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h1>{character.name}</h1>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive" />
                    Alive
                  </>
                ) : (
                  <>
                    <span className="dead" />
                    Dead
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey"> Episodios: </span>
                <span> {character.episode.length} </span>
              </p>
              <p>
                <span className="text-grey"> Especie: </span>
                <span> {character.species} </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={resetCharactersToBackHome}>
        Volver al home
      </span>
    </div>
  );
}
