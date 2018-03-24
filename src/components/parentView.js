import React, { Component } from 'react';
const axios = require('axios')

class ParentView extends Component {
  constructor(props){
    super(props)
    this.state = {
      "accounts":[],

    }
  }




  getToken = () => {
    axios.post("https://api.dxhackathon.com/oauth2/token", {
      client_id:"vgw3sf4f8nq3b98i1gdfr8wpx4gpty0ska52",
      client_secret:"eb5f6rda6v0d1ld8y4fymkudo86gorrc47cj",
      grant_type:"client_credentials"
    })
  }

  

  render() {
    console.log(this.getToken())
    return (
      <div>
        <h1 className="title">Allowance</h1>
        <br/>
        {/* <h3>Account Balance:{this.state.accounts[0].availableBalance}</h3>
        <ul>
          {this.state.map((account, index) => {
            return <li key={index}></li>
          })}
        </ul> */}
      </div>
    );
  }

}

export default ParentView;
