import React, { Component } from "react";
import PastryCard from "./PastryCard";
import APIManager from "../../Modules/APIManager"

export default class PastryList extends Component {
  state = {
    pastries: []
  };

  componentDidMount() {
    APIManager.getAll("pastrys").then((allPastries) => {
      this.setState({
        pastries: allPastries
      });
    });
  }

  deletePastry = id => {
    // calling the database to delete card then render the new data to dom
    APIManager.delete("pastrys", id).then(() => {
      APIManager.getAll("pastrys").then(newPastries => {
        this.setState({
          newPastries: newPastries
        });
      });
    });
  };

  render() {
     console.log("heyyyyyyy",this.state.pastries)
    return (
      <>
        {this.state.pastries.map(pastry => (
          <PastryCard key={pastry.id} pastry={pastry} deletePastry={this.deletePastry}/>
        ))}
      </>
    );
  }
}