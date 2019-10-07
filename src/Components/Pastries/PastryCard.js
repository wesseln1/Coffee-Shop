import React, { Component } from "react";
import { Card, CardText, CardTitle, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import CoffeeDetails from "./CoffeeDetails"
import { Link } from "react-router-dom";
import "../Coffee/CoffeeCard.css";

class PastryCard extends Component {
    render() {
        console.log("heyy")
    if (this.props.pastry.id % 2 === 0) {
      return (
        <>
          <Card body inverse className="coffeeCardEven">
            <CardTitle>
              <h2>{this.props.pastry.name}</h2>
            </CardTitle>
              <h4>Description:</h4>
            <CardText>
              {this.props.pastry.description}
            </CardText>
            <h6>Price:</h6>
              <CardText>{this.props.pastry.price}</CardText>
            <Link to={`pastry/${this.props.pastry.id}`}>
              <Button className="coffeeCardButton">Details</Button>
            </Link>
            <Button className="coffeeCardDeleteButton" color="danger" onClick={() => this.props.deletePastry(this.props.pastry.id)}>Delete</Button>
          </Card>
        </>
      );
    } else {
      return (
        <>
          <Card body inverse className="coffeeCardOdd">
            <CardTitle>
              <h2>{this.props.pastry.name}</h2>
            </CardTitle>
            <h4>Description:</h4>
            <CardText>Description: {this.props.pastry.description}</CardText>
            <h6>Price:</h6>
              <CardText>{this.props.pastry.price}</CardText>
            <Link to={`pastry/${this.props.pastry.id}`}>
              <Button className="coffeeCardButton">Details</Button>
            </Link>
            <Button className="coffeeCardDeleteButton" color="danger" onClick={() => this.props.deleteCoffee(this.props.pastry.id)}>Delete</Button>
          </Card>
        </>
      );
    }
  }
}
export default PastryCard;