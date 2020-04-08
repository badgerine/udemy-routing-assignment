import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Course from './containers/Course/Course'
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <div className="App">
          <header>
            <nav className="NavLinks">
              <ul>
                <li><NavLink to="/users" >Users</NavLink></li>
                <li><NavLink to="/courses" >Courses</NavLink></li>
              </ul>
            </nav>
          </header>

          <Switch>
            <Route path="/users" component={Users} />
            <Route path="/courses/:id/:title?" component={Course} />
            <Route path="/courses" component={Courses} />
            <Redirect from="/all-courses" to="/courses" />
            <Route render={() => <h1>Not Found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
