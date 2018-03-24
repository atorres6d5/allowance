import React, { Component } from 'react';
const axios = require('axios')

class ParentView extends Component {
  constructor(props){
    super(props)
    this.state = {
      "accounts":[],

    }
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
