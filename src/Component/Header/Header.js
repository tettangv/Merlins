import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
// import "../../public/assets/css/Header.css";
import { nav } from "bootstrap";
import $ from "jquery";
// import NavLink from "react-bootstrap/NavLink";

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.isOpen = false;

    console.log("Header: " + this.props.role);
    this.state = {
      role: this.props.role
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  changeRole = data => {
    this.setState({ role: data.role, point: data.point });
    console.log("Role : " + this.state.role);
  };

  componentDidUpdate = () => {
    if (this.state.role !== this.props.role) {
      this.setState({ role: this.props.role });
    }
  };

  render() {
    const styleMenu = {
      marginLeft: "15px"
    };

    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="navbar-brand" style={styleMenu}>
            <NavLink to="/">
              <img
                src="../assets/images/merlin2.png"
                alt=""
                width="200"
                height="70"
              />
            </NavLink>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent ml-auto"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-grow-0 ml-auto"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav text-right ml-auto">
              <li className="nav-item active">
                <div className="nav-link">
                  <NavLink to="/">HOME</NavLink>
                </div>
              </li>
              {this.props.role == 3 ? (
                <li className="nav-item active">
                  <div className="nav-link">
                    <NavLink to="/admin">ADMIN</NavLink>
                  </div>
                </li>
              ) : null}
              <li className="nav-item active">
                <div className="nav-link">
                  <NavLink to="/calculator">CALCULATOR</NavLink>
                </div>
              </li>
              <li className="nav-item active">
                <div className="nav-link">
                  <NavLink to="/logout">LOGOUT</NavLink>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
