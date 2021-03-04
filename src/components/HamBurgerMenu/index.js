import React from "react";
import css from "./style.module.css";

const HamBurgerMenu = (props) => {
    return (
        <div onClick={props.toggleSideBar} className={css.HamBurgerMenu}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default HamBurgerMenu;