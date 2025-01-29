import React from "react";
import NavItem from "./NavItem/NavItem";
import css from "./nav-panel.module.scss";

export default function NavPanel({ items }) {
  const navigationList = items.map((item) => (
    <NavItem navitem={item} key={item.name.toString()} />
  ));
  return (
    <>
      <nav>
        <ul className={css.navigation}>{navigationList}</ul>
      </nav>
    </>
  );
}
