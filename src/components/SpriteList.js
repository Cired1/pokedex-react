import "./SpriteList.scss";

const SpriteList = ({
  name,
  frontSprite,
  backSprite,
  frontShiny,
  backShiny,
}) => {
  return (
    <div className="sprites">
      <img src={frontSprite} alt={name + "front_default"} />
      <img src={backSprite} alt={name + "back_default"} />
      <img src={frontShiny} alt={name + "front_shiny"} />
      <img src={backShiny} alt={name + "back_shiny"} />
    </div>
  );
};

export default SpriteList;
