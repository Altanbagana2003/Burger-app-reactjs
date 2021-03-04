import React from "react";
import css from "./style.module.css";

const Order = props => {
    return (
        <div className={css.Order}>
            <p>Location: {props.order.location.name} | {props.order.location.street} | {props.order.location.city}</p>
            <p>Value: <strong>{props.order.dun}$</strong></p>
        </div>
    );
};


export default Order;