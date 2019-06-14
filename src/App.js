import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/employee/add'} className="nav-link">Create</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/employees'} className="nav-link">List</Link>
                                </li>
                            </ul>
                        </div>
                    </nav> <br />
                    <h2>React CRUD Tutorial</h2> <br />
                    <Switch>
                        <Route exact path='/employee/add' component={ Create }/>
                        <Route path='/employee/edit/:id' component={ Edit }/>
                        <Route path='/employees' component={ Index }/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;