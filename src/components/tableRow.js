import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class TableRow extends Component {
    constructor(props){
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        axios.delete('http://localhost:4000/employee/'+this.props.obj.id)
            .then(res => console.log(res.data))
            .catch( error => console.log(error) )
    }


    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.lastname}
                </td>
                <td>
                    {this.props.obj.category}
                </td>
                <td>
                    <Link to={"employee/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;