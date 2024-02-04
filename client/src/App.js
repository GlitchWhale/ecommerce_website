import React, {Component} from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.css"
import "./css/App.css"

import AddShirt from "./components/AddShirt"
import EditShirt from "./components/EditShirt"
import DeleteShirt from "./components/DeleteShirt"
import DisplayAllShirts from "./components/DisplayAllShirts"

    
export default class App extends Component 
{
    render() 
    {
        return (
            <BrowserRouter>
                <Switch>                 
                    <Route exact path="/" component={DisplayAllShirts} />
                    <Route exact path="/AddShirt" component={AddShirt} />
                    <Route exact path="/EditShirt/:id" component={EditShirt} />
                    <Route exact path="/DeleteShirt/:id" component={DeleteShirt} />
                    <Route exact path="/DisplayAllShirts" component={DisplayAllShirts}/>
                    <Route path="*" component={DisplayAllShirts}/>
                </Switch>
            </BrowserRouter>
        )
    }
}