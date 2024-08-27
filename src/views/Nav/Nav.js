import React from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div class="topnav">
        <NavLink to="/" ActiveClassName="active" exact={true}>
          Home
        </NavLink>
        <NavLink to="/todo" ActiveClassName="active">
          Todos
        </NavLink>
        <NavLink to="/about" ActiveClassName="active">
          About
        </NavLink>
        <NavLink to="/user" ActiveClassName="active">
          Users
        </NavLink>
      </div>
    );
  }
}

export default Nav;
