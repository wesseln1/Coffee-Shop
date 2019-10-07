import React, { Component } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import CoffeeList from "../Coffee/CoffeeList"

export default class NavBar extends Component {
  render() {
    return (
        <header>
        <h1 className="site-title">Reactive Coffee<br />
        </h1>
        <nav>
            <ul className="container">
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/coffee">Coffee</Link></li>
                <li><Link className="nav-link" to="/pastries">Pastries</Link></li>
                <li><Link className="nav-link" to="/employees">Employees</Link></li>
                <li><Link className="nav-link" to="/stores">Stores</Link></li>
                <li><Link className="nav-link" to="/menu">Menu</Link></li>
            </ul>
        </nav>
    </header>
    )
  }
}
