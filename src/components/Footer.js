import "./Footer.scss";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className="container-footer">
      <div className="wrapper-footer">
        <h3>Pokedex</h3>
        <strong>
          <small>Made by Bryan Abundis</small>
        </strong>
        <Social />
      </div>
    </footer>
  );
};
export default Footer;
