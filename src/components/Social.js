import { FaEnvelope, FaGithub } from "react-icons/fa";
import "./Social.scss";

const Social = () => {
  return (
    <div className="social">
      <a href="https://github.com/Cired1" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="mailto:edabundis@gmail.com">
        <FaEnvelope />
      </a>
    </div>
  );
};

export default Social;
