import React, { Component } from 'react';
const axios = require('axios')

class ParentView extends Component {
  constructor(props){
    super(props)
    this.state = {
      mainBalance:6524,
      kids:[{name:"Ben Kenobi", accountBal:200, weeklyAllow:15}, {name:"Leah SkyWalker", accountBal:75, weeklyAllow:20}]
    }
  }



  render() {
    return (
      <div>
        <h1 className="title">Allowance</h1>
        <br/>
        <h3>${this.state.mainBalance}</h3>
        <br/>
        <div>
          {this.state.kids.map((kid, i) => {
            return (
              <div key={i}>
                <button  type="button">{kid.name}</button>
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
