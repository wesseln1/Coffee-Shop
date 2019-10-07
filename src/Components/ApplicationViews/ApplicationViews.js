import React, { Component } from "react"
import { Route } from "react-router-dom"
import CoffeeList from "../Coffee/CoffeeList"
import NavBar from "../NavBar/NavBar"


export default class ApplicationViews extends Component {
    render(){
        return (
            <>
            <Route exact path="/coffee" render={(props) => {
                return <CoffeeList />
            }} />
            </>
            )
    }
}