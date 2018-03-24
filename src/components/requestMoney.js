import React, { Component } from 'react';
import '../css/requestMoney.css'
class RequestMoney extends Component {
  constructor(props){
    super(props)

  }
  cancelRequest=()=>{
    this.props.toggleRequestMoney()
  }

  sendRequest=(e)=>{
    e.preventDefault()
    let amount = e.target.amount.value
    let memo = e.target.memo.value
    let request = {amount, memo}
    this.props.requestMoney(request)
    this.props.toggleRequestMoney()
  }

  render() {
    return (
      <div>
        <h2>Ask for money</h2>
        <form onSubmit={this.sendRequest}>
          <div>
            Amount:$<input type='text' name='amount'></input>
          </div>
          <div>
            Whats it for?<input type='text' name='memo'></input>
          </div>
          <button type='submit' className='formBtn sendRequest'>Send</button>
        </form>
        <button onClick={this.cancelRequest} className='formBtn cancelRequest'>Cancel</button>
      </div>
    );
  }

}

export default RequestMoney;
