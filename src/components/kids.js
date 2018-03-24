import React, { Component } from 'react';
import '../css/kids.css'
class Kids extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'Sean',
      progress:.5,
      goal:1000,
      balance:0,
      allowance:5,
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
          <div className='progressBar'></div>
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
