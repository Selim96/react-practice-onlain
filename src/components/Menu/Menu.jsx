import MenuItem from "components/MenuItem/MenuItem";

const Menu = ({ items = [] }) => {
  return (
    <>
      <ul>
        {items.map((item) => (
          <MenuItem key={item.id} textContent={item} />
        ))}
      </ul>
    </>
  );
};

export default Menu;
