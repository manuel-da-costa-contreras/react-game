import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name: '',
            person_lastname: '',
            person_category: '',
        }
    }

    //when component called, fill the form.
    componentDidMount() {
        axios.get('http://localhost:4000/employee/edit/'+this.props.match.params.id) //send url + id
            .then( res => {
                this.setState({
                    person_name: res.data.name,
                    person_lastname: res.data.lastname,
                    person_category: res.data.category,
                });
            } )
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({
            person_name: e.target.value
        });
    }

    onChangeLastname(e) {
        this.setState({
            person_lastname: e.target.value
        });
    }

    onChangeCategory(e) {
        this.setState({
            person_category: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            /*  receives the form data
                pay special attention to the var names.
                these var names have to be exactly at the ones in the JSON otherwise new var names will be in the JSON                
             */
            name: this.state.person_name,
            lastname: this.state.person_lastname,
            category: this.state.person_category
        };
        axios.put('http://localhost:4000/employee/update/'+this.props.match.params.id, obj)
            .then( res => console.log(res.data));

        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Update Employee</label>
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
                    </div>
                    <div className="from-group">
                        <input type="submit" value="Update Employee" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}