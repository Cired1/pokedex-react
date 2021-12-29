import "./PokemonTypes.scss";

const PokemonTypes = ({ types }) => {
  return (
    <div className="container-types">
      <h4>Type</h4>
      <ul>
        {types.map((type) => (
          <li key={type.type.name}>
            <small>
              <strong>{type.type.name}</strong>
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonTypes;
