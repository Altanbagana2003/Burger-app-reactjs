import React from "react";
import css from "./style.module.css";
import BuildControl from "../BuildControl";

const BuildControls = props => {
    return (
        <div className={css.BuildControls}>
            <p>Price of Burger: <strong>{props.price} $</strong></p>
            {Object.keys(props.ingredientNames).map(el => (
                 <BuildControl key={el} disabled={props.disabledIngredients} ortsHasah={props.ortsHasah} ortsNemeh={props.ortsNemeh} type={el} orts={props.ingredientNames[el]} />
            ))}
            <button onClick={props.showConfirmModal} disabled={props.disabledPurchase} className={css.OrderButton}>Order</button>
        </div>
    );
}

export default BuildControls;


