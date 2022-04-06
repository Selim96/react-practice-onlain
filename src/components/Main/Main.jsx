import style from "./Main.module.css";
import Sidebar from "components/Sidebar/Sidebar";

const Main = () => {
  return (
    <>
      <Sidebar />
      <p className={style.container}>Text</p>
    </>
  );
};

export default Main;
