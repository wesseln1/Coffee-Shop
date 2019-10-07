import React, { Component } from "react";
import CoffeeCard from "./CoffeeCards";
import APIManager from "../../Modules/APIManager"

export default class CoffeeList extends Component {
  state = {
    allCoffee: []
  };

  componentDidMount() {
    APIManager.getAll("coffees").then((allCoffee) => {
      this.setState({
        allCoffee: allCoffee
      });
    });
  }

  deleteCoffee = id => {
    // calling the database to delete card then render the new data to dom
    APIManager.delete("coffees", id).then(() => {
      APIManager.getAll("coffees").then(newCoffees => {
        this.setState({
          coffees: newCoffees
        });
      });
    });
  };

  render() {
     console.log(this.state.allCoffee)
    return (
      <>
        {this.state.allCoffee.map(coffee => (
          <CoffeeCard key={coffee.id} coffee={coffee} deleteCoffee={this.deleteCoffee}/>
        ))}
      </>
    );
  }
}
