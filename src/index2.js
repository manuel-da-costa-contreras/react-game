import React from 'react';
import ReactDOM from 'react-dom';
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

// --------------------------------

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
                <h1> Hello World! </h1>  
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }    
}

ReactDOM.render(
    <Clock />, document.getElementById('root')
);

// --------------------------------


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
            <div>
                <Clock />
            </div>            

            <Welcome name="Sara" />
            <Welcome2 name="Manuel" />

            <div className="container">
                <Comment date = { new Date() }  text = {"Test"} author = {''} />
            </div>
            <br />

            <Comment 
            date = {comment.date}
            text = {comment.text}
            author = {comment.author}
            />

            

        </div>

        
    )
}

/*  pay carefull atention where <App /> is.
    that's the element to view/show and then the container
    where is it going to show
 */
ReactDOM.render( <App />,  document.getElementById('root') );
// ReactDOM.render( <Clock />, document.getElementById('root'));



