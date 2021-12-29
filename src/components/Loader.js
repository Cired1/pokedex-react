import { FaSpinner } from "react-icons/fa";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="spinner">
      <FaSpinner className="spinning" size={60} />
    </div>
  );
};

export default Loader;
