import React, { Component } from 'react';
import Kids from './components/kids.js'
import './App.css';
import ParentView from "./components/parentView.js"
import accounts from './apirequest.js'
let capOneLogo = require ("./assets/pics/capOneLogo.png")
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      "user": accounts,
    }
  }

  setLocalStorage = () =>{
    localStorage.setItem("client_id", "vgw3sf4f8nq3b98i1gdfr8wpx4gpty0ska52")
    localStorage.setItem("client_secret", "eb5f6rda6v0d1ld8y4fymkudo86gorrc47cj")
  }

  componentWillMount = () =>{
    this.setLocalStorage()
  }

  render() {
    return (
      <div>

        <div className="banner">
          <img src={capOneLogo} alt="Capital One Logo" height="40"/>
        </div>
        <Kids user={this.state.user}/>
        {/* <ParentView /> */}
      </div>
    );
  }

}

export default App;
