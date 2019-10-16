import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Admin extends Component {
  state = {
    role: 0
  };

  componentDidMount() {
    this.setState({ role: this.props.role });
  }

  render() {
    console.log("Page Calculator");
    if (this.props.role === 0) {
      return <Redirect to="/" />;
    } else {
      return <div>Page 2</div>;
    }
  }
}

export default Admin;
