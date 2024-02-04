import React, {Component} from "react"
import ShirtTableRow from "./ShirtTableRow"


export default class ShirtTable extends Component
{
    render() 
    {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Price</th>
                    </tr>
                </thead>
                  
                <tbody>
                    {this.props.shirts?.map((shirt) => <ShirtTableRow key={shirt.id} shirt={shirt}/>)}
                </tbody>
            </table>      
        )
    }
}