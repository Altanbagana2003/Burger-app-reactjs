import React from "react";
import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = () => {
    return (
        <div>
            <ul className={css.Menu}>
                <MenuItem exact link="/">New order</MenuItem>
                <MenuItem link="/orders">Orders</MenuItem>
            </ul>
        </div>
    );
};

export default Menu;