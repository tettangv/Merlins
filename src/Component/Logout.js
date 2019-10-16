import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

export class Logout extends Component {
  componentDidMount() {
    this.props.changeRole(0);
  }
  render() {
    return (
      <Route>
        <Redirect to="/" />
      </Route>
    );
  }
}

export default Logout;
