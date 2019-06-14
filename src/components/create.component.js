import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name: '',
            person_lastname: '',
            person_category: 'SA',
        }
    }
    
    
    onChangeName(event) {
        this.setState({
            person_name: event.target.value
        });
    }

    onChangeLastname(event) {
        this.setState({
            person_lastname: event.target.value
        });
    }

    onChangeCategory(event) {
        this.setState({
            person_category: event.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            name: this.state.person_name,
            lastname: this.state.person_lastname,
            category: this.state.person_category
        };
        axios.post('http://localhost:4000/employee/add', obj)
            .then(res => console.log(res.data))

        this.setState({
            person_name: '',
            person_lastname: '',
            person_category: ''
        })
        
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <h3>Add new Employee</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Add Person Name</label>
                        <input 
                        type="text" 
                        className="form-control"
                        value={this.state.person_name}
                        onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Add Person Lastname</label>
                        <input 
                        type="text" 
                        className="form-control"
                        value={this.state.person_lastname}
                        onChange={this.onChangeLastname}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Add Person Category</label>
                        <select className="form-control" value={this.state.person_category} onChange={this.onChangeCategory} >
                            <option value="SA">SA</option>
                            <option value="SL">SL</option>
                            <option value="SK">SK</option>
                        </select>
                        {/* change to Select option */}
                    </div>
                    <div className="from-group">
                        <input type="submit" value="Register Employee" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}