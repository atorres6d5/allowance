import React, { Component } from 'react';
import '../css/kids.css'
import RequestMoney from './requestMoney'
class Kids extends Component {
  constructor(props){
    super(props)
    this.state={
      // name:this.props.user.accounts[0].accountNickname,
      name:this.props.user.name ? this.props.user.name : '',
      progress:this.props.user.account ? Math.floor((this.props.user.account.availableBalance/ this.props.user.goals[0].amount) * 100) : '',
      goal:this.props.user.goals ? this.props.user.goals[0].amount: '',
      balance:this.props.user.account ? this.props.user.account.availableBalance : '',
      // // allowance:this.props.user.accounts[0].allowance.amount,
      allowance:this.props.user ? this.props.user.allowances[0].amount : '',
      requestMoney:false,
    }
  }

  toggleRequestMoney =() =>{
    this.setState({
      requestMoney:!this.state.requestMoney
    })
  }



  render() {
    this.props.user.users ? console.log('state', this.props.user.users.goals) : ''

    return (
      <div className='kidContainer'>

        {this.state.requestMoney ?
          <RequestMoney
            toggleRequestMoney={this.toggleRequestMoney}
            requestMoney={this.props.requestMoney}
          />
          :
          <div>
            <div className='userName'>
              <h2>{this.state ? this.state.name : ''}</h2>
            </div>
            <div className='progressBarContainer'>
              <div className='allowance'>
                <h3>Allowance: ${this.state ? this.state.allowance : ''} </h3>
              </div>
              <div className='goal'>
                <p>Goal: ${this.state ? this.state.goal : ''}</p>
              </div>
              <div className=' progressBorder'>
                <div className='progressBar' style={{height:this.state.progress}}></div>
              </div>
              <div className='balance'>
                <p>Stash: ${this.state ? this.state.balance : ''}</p>
              </div>
            </div>
            <div className='requestMoney'>
                <button onClick={this.toggleRequestMoney}>Request Money!</button>
            </div>
          </div>
    }
      </div>
    );
  }

}

export default Kids;
