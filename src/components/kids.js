import React, { Component } from 'react';
import '../css/kids.css'
class Kids extends Component {
  constructor(props){
    super(props)
    this.state={
      name:this.props.name,
      progress:(this.props.account.availableBalance / this.props.goals[0].amount)*100,
      goal:this.props.goals[0].amount,
      balance:this.props.account.availableBalance,
      allowance:this.props.allowance.amount,
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
          <div className='progressBar'>
            <p>{this.state.progress}%</p>
          </div>
          <div className='goal'>
            <p>{this.state.goal}</p>
          </div>
        </div>
        <div>
            <button>Request Money!</button>
        </div>

      </div>
    );
  }

}

export default Kids;
