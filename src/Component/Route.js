import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Admin from "./Admin/Admin";
import Calculator from "./Calculator/Calculator";
import PageNotFound from "./PageNotFound/PageNotFound";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Home item={this.props.item} />}
        />
        <Route path="/admin" component={Admin} />
        <Route path="/calculator" component={Calculator} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}

export default Routes;