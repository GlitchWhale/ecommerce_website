import React, {Component} from "react"
import {Redirect} from "react-router-dom"
import axios from "axios"

import {SERVER_HOST} from "../config/global_constants"


export default class DeleteShirt extends Component
{
    constructor(props) 
    {
        super(props)
        
        this.state = {
            redirectToDisplayAllShirts:false
        }
    }
    
    
    componentDidMount() 
    {   
        axios.delete(`${SERVER_HOST}/cars/${this.props.match.params.id}`)
        .then(res => 
        {
            if(res.data)
            {
                if (res.data.errorMessage)
                {
                    console.log(res.data.errorMessage)    
                }
                else // success
                { 
                    console.log("Record deleted")
                }
                this.setState({redirectToDisplayAllShirts:true})
            }
            else 
            {
                console.log("Record not deleted")
            }
        })
    }
  
  
    render() 
    {
        return (
            <div>   
                {this.state.redirectToDisplayAllShirts ? <Redirect to="/DisplayAllShirts"/> : null}
            </div>
        )
    }
}