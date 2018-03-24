import React, { Component } from 'react';
import '../css/kids.css'
class Kids extends Component {
  constructor(props){
    super(props)
    this.state={
      name:this.props.user.accounts[0].accountNickname,
      progress:(this.props.user.accounts[0].availableBalance / 1000)*100,
      goal:1000,
      // balance:this.props.user.accounts[0].availableBalance,
      // // allowance:this.props.user.accounts[0].allowance.amount,
      allowance:50,
    }
  }
  render() {
    return (
      <div className='kidContainer'>
        <div className='userName'>
          <h2>{this.state.name}</h2>
        </div>
        <div className='progressBarContainer'>
          <div className='allowance'>
            <h3>Allowance: {this.state.allowance} </h3>
          </div>
          <div className='goal'>
            <p>Goal: ${this.state.goal}</p>
          </div>
          <div className='progressBar'>

          </div>
          {/* <div className='goal'>
            <p>Goal: ${this.state.goal}</p>
          </div> */}
        </div>
        <div className='requestMoney'>
            <button>Request Money!</button>
        </div>

      </div>
    );
  }

}

export default Kids;
