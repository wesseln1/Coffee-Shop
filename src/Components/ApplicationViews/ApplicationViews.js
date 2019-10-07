import React, { Component } from "react";
import { Route } from "react-router-dom";
import CoffeeList from "../Coffee/CoffeeList";
import PastryList from "../Pastries/PastryList";
// import NavBar from "../NavBar/NavBar";
import CoffeeDetails from "../Coffee/CoffeeDetails";
import HomePage from "../Home";

export default class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/coffee"
          render={props => {
            return <CoffeeList />;
          }}
        />
        <Route
          exact
          path="/coffee/:coffeeId(\d+)"
          render={props => {
            console.log(props);
            return (
              <CoffeeDetails
                coffeeId={parseInt(props.match.params.coffeeId)}
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/pastries"
          render={props => {
            return <PastryList />;
          }}
        />
        {/* <Route
          exact
          path="/pastry/:pastryId(\d+)"
          render={props => {
            console.log(props);
            return (
              <PastryDetails
                pastryId={parseInt(props.match.params.pastryId)}
                {...props}
              />
            );
          }}
        /> */}
        <Route
          exact
          path="/"
          render={props => {
            console.log(props);
            return <HomePage />;
          }}
        />
      </React.Fragment>
    );
  }
}
