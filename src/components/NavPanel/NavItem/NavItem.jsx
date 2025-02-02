import ccs from "./nav-item.module.scss";

const NavItem = ({ navitem }) => {
  const { name } = navitem;
  return (
    <li className={ccs.navigationItem}>
      <p>{name}</p>
      <div>
        <a href="@">Наша історія</a>
        <a href="@">Звітність</a>
        <a href="@">Досягнення</a>
        <a href="@">Благодійність</a>
        <a href="@">Залишки препаратів</a>
      </div>
    </li>
  );
};

export default NavItem;
