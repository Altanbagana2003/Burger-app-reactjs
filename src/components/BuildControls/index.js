import React from "react";
import css from "./style.module.css";
import BuildControl from "../BuildControl";
import { connect } from "react-redux";
import * as actions from "../../Redux/actions/BurgerActions";

const BuildControls = (props) => {
  const disabledIngredients = { ...props.burgeriinOrts };
  for (let key in disabledIngredients) {
    disabledIngredients[key] = disabledIngredients[key] <= 0;
  }
  return (
    <div className={css.BuildControls}>
      <p>
        Price of Burger: <strong>{props.price} $</strong>
      </p>
      {Object.keys(props.ingredientNames).map((el) => (
        <BuildControl
          key={el}
          disabled={disabledIngredients}
          ortsHasah={props.ortsHasah}
          ortsNemeh={props.ortsNemeh}
          type={el}
          orts={props.ingredientNames[el]}
        />
      ))}
      <button
        onClick={props.showConfirmModal}
        disabled={!props.purchasing}
        className={css.OrderButton}
      >
        Order
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    burgeriinOrts: state.ingredients,
    price: state.totalPrice,
    purchasing: state.purchasing,
    ingredientNames: state.INGREDIENT_NAME,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ortsNemeh: (ortsNer) => dispatch(actions.addIngredient(ortsNer)),
    ortsHasah: (ortsNer) => dispatch(actions.removeIngredient(ortsNer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);
