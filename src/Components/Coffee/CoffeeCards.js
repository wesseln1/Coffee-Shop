import React, { Component } from "react";
import { Card, CardText, CardTitle, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import CoffeeDetails from "./CoffeeDetails"
import { Link } from "react-router-dom";
import "./CoffeeCard.css";

class CoffeeCard extends Component {
  render() {
    if (this.props.coffee.id % 2 === 0) {
      return (
        <>
          <Card body inverse className="coffeeCardEven">
            <CardTitle>
              <h2>{this.props.coffee.name}</h2>
            </CardTitle>
              <h4>Description:</h4>
            <CardText>
              {this.props.coffee.description}
            </CardText>
              <h6>Price:</h6>
              <CardText>{this.props.coffee.price}</CardText>
            <Link to={`coffee/${this.props.coffee.id}`}>
              <Button className="coffeeCardButton">Details</Button>
            </Link>
            <Button className="coffeeCardDeleteButton" color="danger" onClick={() => this.props.deleteCoffee(this.props.coffee.id)}>Delete</Button>
          </Card>
        </>
      );
    } else {
      return (
        <>
          <Card body inverse className="coffeeCardOdd">
            <CardTitle>
              <h2>{this.props.coffee.name}</h2>
            </CardTitle>
            <h4>Description:</h4>
            <CardText>Description: {this.props.coffee.description}</CardText>
            <h6>Price:</h6>
              <CardText>{this.props.coffee.price}</CardText>
            <Link to={`coffee/${this.props.coffee.id}`}>
              <Button className="coffeeCardButton">Details</Button>
            </Link>
            <Button className="coffeeCardDeleteButton" color="danger" onClick={() => this.props.deleteCoffee(this.props.coffee.id)}>Delete</Button>
          </Card>
        </>
      );
    }
  }
}
export default CoffeeCard;
