import React from "react";
import css from "./style.module.css";
import Button from "../General/Button";

const OrderSummary = props => {
    return (
        <div>
            <h3>Your order</h3>
            <p>The ingredients that you chose: </p>
            <ul>
                {Object.keys(props.ingredients).map(el => <li key={el}>{props.ingredientNames[el]} : {props.ingredients[el]}</li>)}
            </ul>
            <p><strong>Value of order: {props.price} $</strong></p>
            <p>Are your sure to continue?</p>
            <Button clicked={props.onCancel} btnType="Danger" text="Cancel"/>
            <Button clicked={props.onContinue} btnType="Success" text="Continue" />
        </div>
    );
};

export default OrderSummary;