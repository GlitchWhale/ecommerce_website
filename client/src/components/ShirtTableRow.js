import React, {Component} from "react"
import {Link} from "react-router-dom"


export default class ShirtTableRow extends Component
{    
    render() 
    {
        return (
            <tr>
                <td>{this.props.shirts.name}</td>
                <td>{this.props.shirts.category}</td>
                <td>{this.props.shirts.image}</td>
                <td>{this.props.shirts.price}</td>
                <td>
                    <Link className="green-button" to={"/EditShirt/" + this.props.shirts._id}>Edit</Link>
                    <Link className="red-button" to={"/DeleteShirt/" + this.props.shirts._id}>Delete</Link>
                </td>
            </tr>
        )
    }
}