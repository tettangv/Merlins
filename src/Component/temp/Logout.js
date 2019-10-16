import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

export class Logout extends Component {
  state = {
    role: 0
  };
  componentDidMount() {
    this.props.changeRole(this.state.role);
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
