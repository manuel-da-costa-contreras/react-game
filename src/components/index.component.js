import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './tableRow';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {employees: []};
    }

    componentDidUpdate(){
        axios.get('http://localhost:4000/employees')
            .then( (res) => {
                this.setState({employees: res.data});
            } )
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidMount(){
        axios.get('http://localhost:4000/employees')
            .then( (res) => {
                this.setState({employees: res.data});
            } )
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow(){
        return this.state.employees.map(function (object, i) {
            return <TableRow obj={object} key={i} />
        });
    }


    render() {
        return (
            <div>
                <h3 align="center">Employees</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Lastname</th>
                            <th>Category</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.tabRow() }
                    </tbody>
                </table>
            </div>
        );
    }
}