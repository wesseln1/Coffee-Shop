import React, { Component } from "react";
import { Route } from "react-router-dom";
import CoffeeList from "../Coffee/CoffeeList";
import PastryList from "../Pastries/PastryList";
// import NavBar from "../NavBar/NavBar";
import CoffeeDetails from "../Coffee/CoffeeDetails";
import HomePage from "../Home";
import { Card, CardTitle } from "reactstrap";

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
          path="/menu"
          render={props => {
            return (
              <>
                <Card className="menu">
                  <Card className="menuCard">
                    <CardTitle>
                      <h2 className="menuText">Coffee</h2>
                    </CardTitle>
                  </Card>
                  <CoffeeList />
                </Card>
                <Card className="menu">
                  <Card className="menuCard">
                    <CardTitle>
                      <h2 className="menuText">Pastries</h2>
                    </CardTitle>
                  </Card>
                  <PastryList />
                </Card>
              </>
            );
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
