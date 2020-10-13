import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Link from './Link.react';
import Button from './Button.react';
import Users from './Users.react';
import './styles/style.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Select from './Select.js';
import MyComponent from './SelectionBox.js';

import Button2 from './UCPButton.js';
import Button from '../node_modules/react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br />
          <Link page="http://www.ucp.ac.uk">University Centre Peterborough</Link>
          <br />
          <Button text="CLICK ME" />
          <br />
          <Users />
<br></br>
          <Button2></Button2>
<Select></Select>
<MyComponent></MyComponent>
        </header>
      </div>
    );
  }
}

export default App;
