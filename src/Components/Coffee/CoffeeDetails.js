import React, { Component } from "react";
import APIManager from "../../Modules/APIManager";
import { Card, CardText, CardTitle, Button } from "reactstrap";
import CoffeeCard from "./CoffeeCards";

class CoffeeDetails extends Component {
  state = {
    coffee: []
  };

  getData() {
    APIManager.get("coffees", this.props.coffeeId).then(coffee => {
      this.setState({
        coffee: coffee
      });
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    if (this.state.coffee.id % 2 === 0) {
      return (
        <>
          <Card body inverse className="coffeeCardEven">
            <CardTitle>{this.state.coffee.name}</CardTitle>
            <CardText>{this.state.coffee.description}</CardText>
            <h6>Price:</h6>
              <CardText>{this.state.coffee.price}</CardText>
            <Button color="danger">Delete</Button>
          </Card>
        </>
      );
    } else {
      return (
        <>
          <Card body inverse className="coffeeCardOdd">
            <CardTitle>{this.state.coffee.name}</CardTitle>
            <CardText>{this.state.coffee.description}</CardText>
            <h6>Price:</h6>
              <CardText>{this.state.coffee.price}</CardText>
            <Button color="danger">Delete</Button>
          </Card>
        </>
      );
    }
  }
}

export default CoffeeDetails;
