import React from "react";
import NavItem from "./NavItem/NavItem";

export default function NavPanel({ items }) {
  const navigationList = items.map((item) => (
    <NavItem navitem={item} key={item.name.toString()} />
  ));
  return (
    <>
      <nav>
        <ul>{navigationList}</ul>
      </nav>
    </>
  );
}
