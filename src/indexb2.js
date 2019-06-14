import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// ----------- Eaxmple 1 -----------

/* ReactDOM.render(
    <h1>Hello, World!</h1>,
    document.getElementById('root')
); */

// ----------- Example 2 -----------

/* const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>
*/

// ----------- Example 3 -----------

/* function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

function tick() {
    const element = (
        <h1> Hello, {formatName(user)} and World!
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </h1>

    );
    ReactDOM.render(element, document.getElementById('root'));
}


setInterval(tick, 1000); */

/* ////////////////////////////////////////////// */
 // ----------- Example 4 -----------

 // React Component ?
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name} </h1>
    }
}

// User-defined component
function Welcome2(props) {
    return <h1>Hello, {props.name} </h1>
}

function formatDate(date) {
    return date.toLocaleDateString();
}

/* ////////////////////////////////////////////// */
// --------------- Comment Example  ---------------

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user = {props.author} />
            <div className="Comment-text"> {props.text} </div>
            <div className="Comment-date"> {formatDate(props.date)} </div>
        </div>
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user = {props.user} />
            <div className="UserInfo-name"> {props.user.name} </div>
        </div>
    );
}

function Avatar(props) {
    return (
        <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
    );
}

/* ////////////////////////////////////////////// */
/* Form Add - example */

class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Opalo'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An user was added to account: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (    
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-container">
                        <div className="form-header">
                            {/* Mental Note: Change this state to props / its a value that never changes */}
                            <h1><label>Account: {this.state.value} </label></h1>
                        </div>
                        <div className="form-body">
                            <div className="form-label"><span>1</span>Full name & Lastname</div>
                            <div className="inner-wrap">
                                <label className="label">Full Name: <input type="text" id="name"/></label>
                                <label className="label">LastName: <input type="text" id="lname"/></label>
                            </div>
                            <div className="form-label"><span>2</span>Worker Business ID</div>
                            <div className="inner-wrap">
                                <label className="label">Business ID: <input type="text" id="id"/></label>
                            </div>
                            <input type="submit" value="Submit" className="btn-submit" />
                        </div>
                    </div>
                </form>
            </div>   
        );
    }
}

/* /////////////////////////////////// */
/* Form Get - example */

const Employees = [
    {id: 1, category: 'SA', name: 'Manuel', lastname: 'da Costa'},
    {id: 2, category: 'SA', name: 'Pedro', lastname: 'Perez'},
    {id: 3, category: 'SA', name: 'Elizabeth', lastname: 'Gonzales'},
];

class EmployeeRow extends React.Component {
    render() {
        const rows = [];
        rows.push(
            <GetForm 
            employee={Employees}
            key={Employees.id}/>
        );
        return (
            <h1>{rows}</h1>
        );
    };
}

class GetForm extends React.Component {
    render() {
        const employee = this.props.value;
        return (
            <div className="container">
                <div className="form-header">
                    <h1> Employees: </h1>
                </div>
                <tr>
                    <td>{employee}</td>
                    
                </tr>
            </div>
        );
    }
}

/* ////////////////////////////////////////////// */

// --------------- Clock Example ---------------

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    // LifeCycle methods

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }


    render() {
        return  (
            <div>
                <h1> Time is: {this.state.date.toLocaleTimeString()} </h1>
            </div>
        );
    }    
}

// Only neccesary if theres no function to send to document
/* ReactDOM.render(
    <Clock />, document.getElementById('root')
); */

/* ////////////////////////////////////////////// */


const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React',
    author: {
        name: 'Opal',
        avatarUrl: 'https://placekitten.com/g/64/64'
    },
};

function App() {
    return (
        <div>

            <div >
                <ul className="navigation">
                    <li><a href="http://localhost:3000/#">First</a></li>
                    <li><a href="http://localhost:3000/#">Second</a></li>
                    <li><a href="http://localhost:3000/#">Third</a></li>
                </ul>
            </div>

            <div className="container">

                <div className="flex-item">
                    <Welcome name="Sara" />

                </div>        

                <div className="flex-item">
                    <Welcome2 name="Manuel" />
                </div>
                
                <div className="flex-item">
                    <Clock />
                </div>            

                <div className="flex-item">
                    <Comment date = { new Date() }  text = {"Test"} author = {''} />
                </div>

                <div className="flex-item">
                    <Comment 
                        date = {comment.date}
                        text = {comment.text}
                        author = {comment.author}
                    />
                </div>

                <div>
                    <AddForm />                    
                </div>

                <div>
                    <GetForm products={Employees} />
                </div>
            </div> 

        </div>       
    )
}



/*  pay carefull atention where <App /> is.
    that's the element to view/show and then the container
    where is it going to show
 */
ReactDOM.render( <App />,  document.getElementById('root') );
// ReactDOM.render( <Clock />, document.getElementById('root'));