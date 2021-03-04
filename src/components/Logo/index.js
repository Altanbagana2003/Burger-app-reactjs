import React from "react";
import css from "./style.module.css";

import logoImage from "../../Assets/Images/burger-logo.png";

const Logo = () => {
    return(
        <div className={css.Logo}>
            <img src={logoImage} />
        </div>
    );
};

export default Logo;