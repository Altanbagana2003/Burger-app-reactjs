import React from "react";
import Spinner from "../../components/General/Spinner";
import css from "./style.module.css";
import Order from "../../components/Order";
import { connect } from "react-redux";
import * as actions from "../../Redux/actions/orderActions";

class OrderPage extends React.Component {
  componentDidMount = () => {
    this.props.loadOrder(this.props.userId, this.props.token);
  };

  render() {
    return (
      <div>
        {this.props.loading ? (
          <Spinner />
        ) : (
          this.props.orders.map((el) => <Order key={el[0]} orders={el[1]} />)
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
    userId: state.signupReducer.userId,
    token: state.signupReducer.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadOrder: (userId) => dispatch(actions.loadOrder(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
