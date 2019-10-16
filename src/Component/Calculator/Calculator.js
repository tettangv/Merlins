import React from "react";
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom";

class Calculator extends React.Component {
  
  click = events => {
    this.props.changeRole(events.target.value);
  };

  render() {
    if (this.props.role == 0) {
      return <Redirect to="/" />;
    } else {
      return (
        <div>
          <p>Calculator Wizard</p>
          <Button outline color="primary" value="2" onClick={this.click}>
            Login
          </Button>
        </div>
      );
    }
  }
}

export default Calculator;
