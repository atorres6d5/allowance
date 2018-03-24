import React, { Component } from 'react';
import '../css/parentView.css'
import ViewRequest from './viewRequest.js'
const pigBank = require('../assets/pics/pigBank.png')
const axios = require('axios')

class ParentView extends Component {
  constructor(props){
    super(props)
    this.state = {
      mainBalance:6524,
      kids:[
      {name:"Ben", accountBal:200, weeklyAllow:15},
      {name:"Leah", accountBal:175, weeklyAllow:20}
      ],
      pendingRequest:1,
      seePending:false
    }
  }


  seePendingReq = () => {
    this.setState({
      seePending:!this.state.seePending
    })
  }

  clickKid = (e) =>{
    console.log(e.target);
  }


  render() {
    return (

      <div className='parentContainer'>

        {this.state.seePending ? <ViewRequest/> :
          <div>
            {this.state.pendingRequest ? <div onClick={this.seePendingReq} className='pendingRequest'>{this.state.pendingRequest} </div> : ''}
            <br/>
            <h3>Current Parent Balance:</h3>
            <h1>${this.state.mainBalance}</h1>
            <div className='allowanceContainer'>
              {this.state.kids.map((kid, i) => {
                return (
                  <div key={i} className='kidAllowance' onClick={this.clickKid}>
                    <h2 >{kid.name}</h2>
                    <div className='allowanceInfo'>
                        {/* <i className="far fa-money-bill-alt"></i> */}
                        <img src={pigBank} height="35"/>
                        <p> ${kid.accountBal}</p>
                    </div>
                    <div className='allowanceInfo'>
                      <i className="far fa-money-bill-alt"></i>
                      <p>${kid.weeklyAllow}</p>
                    </div>

                  </div>
                )
              })}
            </div>
          </div>

      }

      </div>
    );
  }

}

export default ParentView;
