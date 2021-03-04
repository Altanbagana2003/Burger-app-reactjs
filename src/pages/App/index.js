import React, { Component } from "react";
import css from './style.module.css';
import Toolbar from "../../components/ToolBar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";
import { computeHeadingLevel } from "@testing-library/react";
import OrderPage from "../OrderPage";
import { Route, Switch } from "react-router-dom";
import { ShippingPage } from "../ShippingPage";

class App extends Component {

  state = {
    showSideBar: false
  };

  toggleSideBar = () => {
    this.setState(prevState => {
      return {showSideBar: !prevState.showSideBar}
    });
  }; 

  render () {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar showSideBar={this.state.showSideBar} toggleSideBar={this.toggleSideBar} />
        <main className={css.Content}>
          <Switch>
            <Route path="/orders" component={OrderPage} />
            <Route path="/ship" component={ShippingPage} />
            <Route path="/" component={BurgerPage} />
          </Switch>
        </main>
    </div>
    );
  };
}

export default App;
