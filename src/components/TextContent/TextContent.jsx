import style from "./textContent.module.css";
const TextContent = ({ textContent, capsLock }) => {
  return (
    <>
      <img
        className={style.imgStyle}
        src={textContent.url}
        alt={textContent.name}
      />
      {capsLock ? <h1>{textContent.name}</h1> : <p>{textContent.name}</p>}
    </>
  );
};

export default TextContent;
