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

  render() {
     console.log(this.state.allCoffee)
    return (
      <>
        <h1>COFFEE LIST</h1>
        {this.state.allCoffee.map(coffee => (
          <CoffeeCard key={coffee.id} coffee={coffee}/>
        ))}
      </>
    );
  }
}
