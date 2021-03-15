import React from "react";
import css from "./style.module.css";

const Order = (props) => {
  return (
    <div className={css.Order}>
      <p>
        Location: {props.orders.location.name} | {props.orders.location.street}{" "}
        | {props.orders.location.city}
      </p>
      <p>
        Value: <strong>{props.orders.dun}$</strong>
      </p>
    </div>
  );
};

export default Order;
