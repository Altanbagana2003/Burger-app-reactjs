import React from "react";
import { Route } from "react-router-dom";
import Burger from "../../components/Burger";
import ContactData from "../../components/ContactData";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import { connect } from "react-redux";

class ShippingPage extends React.Component {
  cancelOrder = () => {
    this.props.history.goBack();
  };

  showContactData = () => {
    this.props.history.replace("/ship/contact");
  };

  render() {
    return (
      <div className={css.ShippingPage}>
        <p style={{ fontSize: "24px" }}>
          <strong>Value: {this.props.price}$</strong>
        </p>
        <Burger />
        <Button clicked={this.cancelOrder} btnType="Danger" text="Cancel" />
        <Button
          clicked={this.showContactData}
          btnType="Success"
          text="Add information to Contact"
        />
        <Route path="/ship/contact">
          <ContactData />
        </Route>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { price: state.BurgerReducer.totalPrice };
};

export default connect(mapStateToProps)(ShippingPage);
