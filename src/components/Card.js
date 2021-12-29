import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ id, name, picture, types }) => {

  return (
    <Link to={`pokemon/${id}`}>
      <article className={`card`}>
        <span className="card-id">
          <strong>{id < 10 ? "00" + id : id < 100 ? "0" + id : id}</strong>
        </span>
        <img src={picture} alt={name} />
        <div className={`card-title ${types[0].type.name}`}>
          <h3>{name}</h3>
        </div>
      </article>
    </Link>
  );
};

export default Card;
