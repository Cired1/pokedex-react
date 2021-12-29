import "./PokemonData.scss";

const PokemonData = ({ dataName, data }) => {
  return (
    <div className="wrapper-pokemon-data">
      <h5>{dataName}</h5>
      <small>
        <strong>{data}</strong>
      </small>
    </div>
  );
};

export default PokemonData;
