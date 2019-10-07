import React, { Component } from 'react';
import { Card, CardText, CardTitle, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CoffeeDetails from "./CoffeeDetails"

class CoffeeCard extends Component {
    render() {
        return (
            <>
            <Card body>
                <CardTitle>{this.props.coffee.name}</CardTitle>
                <CardText>It's good</CardText>
        {/* <Button color="primary" onClick={(<CoffeeDetails key={this.props.coffee.id} coffee={this.props.coffee}/>)}>Details</Button> */}
                <Button color="danger">Delete</Button>
            </Card>
            </>
        )
    }
}
export default CoffeeCard
