import style from "./Main.module.css";
import Sidebar from "components/Sidebar/Sidebar";
import MainContant from 'components/MainContant/MainContant'

const Main = () => {
  return (
    <>
      <div className={style.wrapper}>
      <Sidebar />
      <p className={style.container}>Text</p>
        <MainContant />
      </div>
    </>
  );
};

export default Main;
