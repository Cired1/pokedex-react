import Title from "./Title";
import "./PokemonPortrait.scss";
import SpriteList from "./SpriteList";

const PokemonPortrait = ({
  name,
  image,
  frontSprite,
  backSprite,
  frontShiny,
  backShiny,
  bgColor
}) => {
  return (
    <section className={`container-portrait ${bgColor}`}>
      <Title title={name} />
      <img className="portrait-image" src={image} alt={name} />
      <SpriteList
        frontSprite={frontSprite}
        backSprite={backSprite}
        frontShiny={frontShiny}
        backShiny={backShiny}
      />
    </section>
  );
};

export default PokemonPortrait;
