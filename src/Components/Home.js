import React, { Component } from "react";
import { Link } from "react-router-dom"
import { Card, Button, CardTitle, CardText } from "reactstrap";
import "./Coffee/CoffeeCard.css"

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Card body inverse className="coffeeCardEven">
          <CardTitle>Brews</CardTitle>
          <CardText>Go checkout all the Coffee we have to offer!</CardText>
          <Link to="/coffee">
          <Button className="coffeeCardButton">Slurp</Button>
          </Link>
        </Card>
        <Card body inverse className="coffeeCardOdd">
          <CardTitle>Tasty Pasty's!</CardTitle>
          <CardText>
            Hungry? Come get one of our tasty treats or Breakfast, Lunch, or
            Dinner!
          </CardText>
          <Button className="coffeeCardButton">Nomm</Button>
        </Card>
        <Card body inverse className="coffeeCardEven">
          <CardTitle>Menu</CardTitle>
          <CardText>Take a peak at our full menu!</CardText>
          <Button className="coffeeCardButton">Peak</Button>
        </Card>
      </div>
    );
  }
}
