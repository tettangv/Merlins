import React, { Component } from "react";
import $ from "jquery";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Routes from "./Route";
import "./Merlin.css";

class Merlin extends Component {
  state = {
    role: 1,
    point: 0
  };

  changeRole = data => {
    this.setState({ role: data.role, point: data.point });
    console.log("Role : " + this.state.role);
  };

  render() {
    return (
      <div id="web">
        <div className="contain-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-md-10 offset-md-1">
              <Header role={this.state.role} point={this.state.role} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-md-10 offset-md-1 fill">
              <section id="body" className="bodymainpage">
                <div className="row">
                  <div className="col-md-10 offet-md-1">
                    <div className="bodycontent">
                      <Routes
                        item="test"
                        role={this.state.role}
                        changeRole={this.changeRole}
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-md-10 offset-md-1">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Merlin;
