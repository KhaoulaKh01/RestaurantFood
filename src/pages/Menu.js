// Menu.js
import React from "react";
import { MenuList } from "../Helpers/MenuList";
import MenuItem from "../Components/MenuItem";
import "../styles/Menu.css";

function Menu({ addToCart }) {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => (
          <MenuItem
            key={key}
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
