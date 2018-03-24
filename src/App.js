import React, { Component } from 'react';
import Kids from './components/kids.js'
import './App.css';
import ParentView from "./components/parentView.js"
import accounts from './apirequest.js'
import ViewRequest from './components/viewRequest.js'
import HandleReq from "./components/handleReq.js"
import AddKid from "./components/addKid.js"
import Allowance from "./components/allowance.js"
import axios from 'axios'
let capOneLogo = require ("./assets/pics/capOneLogo.png")

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      "user": '',
      'userType':''

    }
  }
  componentWillMount = () =>{
    this.setLocalStorage()
    this.getUserAccounts()
  }

  getUserAccounts = () => {
    axios.get(`http://localhost:3000/api/users/1`).then(result => {
      this.setState({
        "user":result.data,
        'userType':result.data.users.user_type,
      })
    })

  }

  switchUser =() => {
    if(this.state.userType === 'parent'){
      axios.get('http://localhost:3000/api/users/2').then(result => {
        this.setState({
            "user":result.data.users,
            'userType':'child'
        })
        console.log("statley", this.state);
      })

    }
    else{
      this.setState({
        'userType':'parent'
      })
    }
  }

  requestMoney = (request) => {
    console.log(request);
  }

  setLocalStorage = () =>{
    localStorage.setItem("client_id", "vgw3sf4f8nq3b98i1gdfr8wpx4gpty0ska52")
    localStorage.setItem("client_secret", "eb5f6rda6v0d1ld8y4fymkudo86gorrc47cj")
  }

  render() {
    console.log(this.state.userType);
    return (
      <div>

        <div className="banner">
          <img src={capOneLogo} alt="Capital One Logo" height="40"/>
          <h1>Allowance</h1>
        </div>
        {this.state.userType === 'parent' ? <ParentView user={this.state.user}/> : <Kids user={this.state.user} requestMoney={this.requestMoney}/> }

        {/* <Allowance /> */}
        <button className='switchUserBtn' onClick={this.switchUser}>Switch Users</button>
      </div>
    );
  }
}

export default App;
