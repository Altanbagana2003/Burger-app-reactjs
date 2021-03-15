import React, { Fragment } from "react";
import css from "./style.module.css";
import MenuItem from "../MenuItem";
import { connect } from "react-redux";

const Menu = (props) => {
  return (
    <div>
      <ul className={css.Menu}>
        {props.userId ? (
          <Fragment>
            <MenuItem link="/logout">Logout</MenuItem>
            <MenuItem exact link="/">
              New order
            </MenuItem>
            <MenuItem link="/orders">Orders</MenuItem>
          </Fragment>
        ) : (
          <Fragment>
            <MenuItem link="/login">Login</MenuItem>
            <MenuItem link="/signup">Signup</MenuItem>
          </Fragment>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.signupReducer.userId,
  };
};

export default connect(mapStateToProps)(Menu);
