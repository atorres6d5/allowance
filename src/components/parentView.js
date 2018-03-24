import React, { Component } from 'react';
const axios = require('axios')

class ParentView extends Component {
  constructor(props){
    super(props)
    this.state = {
      mainBalance:6524,
      kids:[
      {name:"Ben Kenobi", accountBal:200, weeklyAllow:15},
      {name:"Leah SkyWalker", accountBal:75, weeklyAllow:20}
      ],
      pendingRequest:3

    }
  }



  render() {
    return (
      <div>
        <h1 className="title">Allowance</h1>
        <br/>
        <h3>${this.state.mainBalance}</h3>
        <div type="buton" style={{"background-color":"#f1f7fa"	}} >{this.state.pendingRequest} Request Pending</div>
        <br/>
        <div>
          {this.state.kids.map((kid, i) => {
            return (
              <div key={i}>
                <h2 style={{"background-color":"#2874af"	}}>{kid.name}</h2>
                <p>Available Balance ${kid.accountBal}</p>
                <p>Weekly Allowance ${kid.weeklyAllow}</p>
              </div>
            )
          })}
        </div>


      </div>
    );
  }

}

export default ParentView;
