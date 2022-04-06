import TextContent from "components/TextContent/TextContent";

const MenuItem = ({ textContent }) => {
  return (
    <li>
      <TextContent textContent={textContent} capsLock={true} />
    </li>
  );
};

export default MenuItem;
