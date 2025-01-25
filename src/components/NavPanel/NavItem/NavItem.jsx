const NavItem = ({ navitem }) => {
  const { name } = navitem;
  return (
    <li>
      <p>{name}</p>
    </li>
  );
};

export default NavItem;
