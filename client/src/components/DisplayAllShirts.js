import React, {Component} from "react"
import {Link} from "react-router-dom"

import axios from "axios"

import ShirtTable from "./ShirtTable"

import {SERVER_HOST} from "../config/global_constants"


export default class DisplayAllShirts extends Component
{
    constructor(props) 
    {
        super(props)
        
        this.state = {
            shirts:[]
        }
    }
    
    
    componentDidMount() 
    {
        axios.get(`${SERVER_HOST}/shirts`)
        .then(res => 
        {
            if(res.data)
            {
                if (res.data.errorMessage)
                {
                    console.log(res.data.errorMessage)    
                }
                else
                {
                    console.log(res.data)
                    console.log("Records read")   
                    this.setState({shirts: res.data})
                }   
            }
            else
            {
                console.log("Record not found")
            }
        })
    }

  
    render() 
    {   
        return (           
            <div className="form-container">
                <div className="table-container">
                    <ShirtTable cars={this.state.shirts} />

                    <div className="add-new-shirt">
                        <Link className="blue-button" to={"/AddShirt"}>Add New Shirt</Link>
                    </div>
                </div>
            </div> 
        )
    }
}