import "./PokemonAbilities.scss";

const PokemonAbilities = ({ abilities }) => {
  return (
    <div className="container-abilities">
      <h4>Abilities</h4>
      <ul>
        {abilities.map((ability) => (
          <li key={ability.ability.name}>
            <small>
              <strong>
                 {ability.ability.name}
              </strong>
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonAbilities;
