import React from "react";
import Button from "../General/Button";
import Spinner from "../General/Spinner";
import css from "./style.module.css";
import axios from "../../axios-orders";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Redux/actions/orderActions";

class ContactData extends React.Component {
  state = {
    name: null,
    city: null,
    street: null,
  };

  changeName = (e) => {
    this.setState({ name: e.target.value });
  };

  changeCity = (e) => {
    this.setState({ city: e.target.value });
  };

  componentDidUpdate() {
    if (
      this.props.newOrderStatus.finished &&
      !this.props.newOrderStatus.error
    ) {
      this.props.history.replace("/orders");
    }
  }

  changeStreet = (e) => {
    this.setState({ street: e.target.value });
  };

  saveOrder = () => {
    const newOrder = {
      userId: this.props.userId,
      ingredients: this.props.ingredients,
      dun: this.props.price,
      location: {
        name: this.state.name,
        city: this.state.city,
        street: this.state.street,
      },
    };
    this.props.saveOrderAction(newOrder);
  };

  render() {
    return (
      <div className={css.ContactData}>
        Value: {this.props.price} $
        <div>
          {this.props.newOrderStatus.error &&
            `Error while saving order : ${this.props.newOrderStatus.error}`}
        </div>
        {this.props.newOrderStatus.saving ? (
          <Spinner />
        ) : (
          <div>
            <input
              onChange={this.changeName}
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              onChange={this.changeStreet}
              type="text"
              name="street"
              placeholder="Your location"
            />
            <input
              onChange={this.changeCity}
              type="text"
              name="city"
              placeholder="City"
            />
            <Button text="Submit" btnType="Success" clicked={this.saveOrder} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    price: state.BurgerReducer.totalPrice,
    ingredients: state.BurgerReducer.ingredients,
    newOrderStatus: state.orderReducer.newOrder,
    userId: state.signupReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrderAction: (newOrder) => dispatch(actions.saveOrder(newOrder)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactData));
