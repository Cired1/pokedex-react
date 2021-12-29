import { Outlet } from "react-router-dom";
/* import ButtonTop from "./ButtonTop"; */
import "./Main.scss";

const Main = () => {
  return (
    <main className="container-main">
      <div className="wrapper-main">
        <Outlet />
        {/* <ButtonTop /> */}
      </div>
    </main>
  );
};

export default Main;
