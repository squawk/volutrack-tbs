import React, { Component } from 'react';
import './App.css';
import 'react-select/dist/react-select.css';
import NavLink from './components/NavLink';
import * as firebase from 'firebase';

class App extends Component {

  constructor() {
    super();
    this.state = {
      title: "Rosamond Volunteers",
      speed: 10
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
      //console.log(snap);
      this.setState({
        speed: snap.val()
      })
    });
  }

  render() {
    return (
      <div className="container">
        <div className="header clearfix">
          <nav>
            <ul className="nav nav-pills pull-xs-right">
              <li className="nav-item"><NavLink to="/">Sign In</NavLink></li>
              <li className="nav-item"><NavLink to="/signout">Sign Out</NavLink></li>
              <li className="nav-item"><NavLink to="/teachers">Teachers</NavLink></li>
              <li className="nav-item"><NavLink to="/admin">Admin</NavLink></li>
            </ul>
          </nav>
          <h3 className="text-muted">{ this.state.title }</h3>
        </div>
        { this.props.children }
      </div>
    );
  }
}

export default App;
