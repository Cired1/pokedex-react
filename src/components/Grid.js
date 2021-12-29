import "./Grid.scss";
import Card from "./Card";

const Grid = ({ pokemon }) => {
  return (
    <div className="grid">
      {pokemon.map((poke) => (
        <Card
          key={poke.id}
          id={poke.id}
          name={poke.name}
          picture={poke.sprites.other["official-artwork"].front_default}
          types={poke.types}
        />
      ))}
    </div>
  );
};

export default Grid;
