import React, { Component } from "react";
import $ from "jquery";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Admin from "./Admin/Admin";
import Calculator from "./Calculator/Calculator";
import PageNotFound from "./PageNotFound/PageNotFound";
import Logout from "./Logout";
import "./Merlin.css";

class Merlin extends Component {
  state = {
    role: 0,
    point: 0,
    name: ""
  };

  changeRole = data => {
    this.setState({ role: data });
    console.log("Main Role : " + this.state.role);
  };

  render() {
    return (
      <div id="web">
        <div className="contain-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-md-10 offset-md-1">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-md-10 offset-md-1 fill">
              <section id="body" className="bodymainpage">
                <div className="row">
                  <div className="col-md-10 offet-md-1">
                    <div className="bodycontent">
                      {/* <Routes item="test" role={this.state.role} /> */}
                      <Switch>
                        <Route
                          path="/admin"
                          component={() => <Admin role={this.state.role} />}
                        />
                        <Route
                          path="/calculator"
                          component={() => (
                            <Calculator
                              role={this.state.role}
                              changeRole={this.changeRole}
                            />
                          )}
                        />
                        <Route
                          path="/logout"
                          component={() => (
                            <Logout changeRole={this.changeRole} />
                          )}
                        />
                        <Route
                          exact
                          path="/"
                          component={() => (
                            <Home
                              role={this.state.role}
                              changeRole={this.changeRole}
                            />
                          )}
                        />
                        <Route component={PageNotFound} />
                      </Switch>
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
