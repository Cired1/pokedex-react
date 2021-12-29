import PokemonAbilities from "./PokemonAbilities";
import PokemonChart from "./PokemonChart";
import PokemonData from "./PokemonData";
import "./PokemonInfo.scss";
import PokemonTypes from "./PokemonTypes";

const PokemonInfo = (props) => {
  return (
    <section className={`pokemon-info ${props.bgColor}`}>
      <div className="pokemon-description">
        <h3>Description</h3>
        <small>
          <strong>{props.description}</strong>
        </small>
      </div>

      <div className="types-abilities-container">
        <PokemonAbilities abilities={props.abilities} bgColor={props.bgColor} />
        <PokemonTypes types={props.types} />
      </div>

      <div className="pokemon-data-container">
        <PokemonData data={`${props.height / 10} m`} dataName="Height" />
        <PokemonData data={`${props.weight / 10} kg`} dataName="Weight" />
        <PokemonData data={`${props.captureRate} %`} dataName="Capture Rate" />
        <PokemonData data={props.habitat} dataName="Habitat" />
      </div>

      <PokemonChart stats={props.stats} />
    </section>
  );
};

export default PokemonInfo;
