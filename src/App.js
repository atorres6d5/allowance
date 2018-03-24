import React, { Component } from 'react';
import Kids from './components/kids.js'
import logo from './logo.svg';
import './App.css';
import ParentView from "./components/parentView.js"

class App extends Component {


  render() {
    return (
      <div>

        <Kids />

      </div>
    );
  }

}

export default App;
