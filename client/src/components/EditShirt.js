import React, {Component} from "react"
import Form from "react-bootstrap/Form"
import {Redirect, Link} from "react-router-dom"
import axios from "axios"

import LinkInClass from "../components/LinkInClass"

import {SERVER_HOST} from "../config/global_constants"

export default class EditShirt extends Component
{
    constructor(props) 
    {
        super(props)

        this.state = {
            name: "",
            category: "",
            colour: "",
            description: "",
            gender: "",
            image: "",
            price: "",
            redirectToDisplayAllShirts:false
        }
    }

    componentDidMount() 
    {      
        this.inputToFocus.focus()
  
        axios.get(`${SERVER_HOST}/cars/${this.props.match.params.id}`)
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
                    this.setState({
                        name: res.data.name,
                        category: res.data.category,
                        colour: res.data.colour,
                        description: res.data.description,
                        gender: res.data.gender,
                        image: res.data.image,
                        price: res.data.price

                    })
                }
            }
            else
            {
                console.log(`Record not found`)
            }
        })
    }


    handleChange = (e) => 
    {
        this.setState({[e.target.name]: e.target.value})
    }


    handleSubmit = (e) => 
    {
        e.preventDefault()

        const shirtObject = {
            name: this.state.name,
            category: this.state.category,
            colour: this.state.colour,
            description: this.state.description,
            gender: this.state.gender,
            image: this.state.image,
            price: this.state.price
        }

        axios.put(`${SERVER_HOST}/cars/${this.props.match.params.id}`, shirtObject)
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
                    console.log(`Record updated`)
                    this.setState({redirectToDisplayAllShirts:true})
                }
            }
            else
            {
                console.log(`Record not updated`)
            }
        })
    }

    
    render() 
    {  
        return (
            <div className="form-container">
    
                {this.state.redirectToDisplayAllShirts ? <Redirect to="/DisplayAllShirts"/> : null}
                        
                <Form>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref = {(input) => { this.inputToFocus = input }} type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="category">
                        <Form.Label>Colour</Form.Label>
                        <Form.Control type="text" name="category" value={this.state.category} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="color">
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="text" name="color" value={this.state.color} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="gender">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="gender" value={this.state.gender} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="image">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="image" value={this.state.image} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="price" value={this.state.price} onChange={this.handleChange} />
                    </Form.Group>
  
                    <LinkInClass value="Update" className="green-button" onClick={this.handleSubmit}/>  
    
                    <Link className="red-button" to={"/DisplayAllShirts"}>Cancel</Link>
                </Form>
            </div>
        )
    }
}