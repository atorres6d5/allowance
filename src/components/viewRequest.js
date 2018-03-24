import React, { Component } from 'react';
import '../css/viewRequest.css'

const divStyle = {
  marginTop: "20px",
  marginLeft: "10px",
  marginRight: "10px"
}

const maxWidth = {
  width: "100%"
}

const requestStyle = {
  height: "65px"
}

class ViewRequest extends Component {
  constructor(props){
    super(props)
    this.state={
      request:[{name:"Ben", amount:25, memo:"Lunch money"}, {name:"Ben", amount:5, memo:"New toy"}, {name:"Ben", amount:50, memo:"Video game"}]
    }
  }

  handleClickYes = (e) => {
    console.log(e.target);
  }

  handleClickNo = (e) => {
    console.log(e.target);
  }

  handleClick = (callback)=>{
    return (e)=>{
      callback()
    }

  }



  render() {
    return (
      <div style={divStyle}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th style={maxWidth}>Memo</th>
            </tr>
          </thead>
          <tbody>
            {this.state.request.map((req, i)=>{
              const approve = ()=>{
                return console.log(req.name, req.amount, req.memo)
              }

            const deny = ()=>{
                return console.log(req.name, req.amount, req.memo)
              }
              return(
                  <tr key={i} style={requestStyle}>
                    <td>{req.name}</td>
                    <td>${req.amount}</td>
                    <td>{req.memo}</td>
                    <td><button onClick={this.handleClick(approve)}>Approve</button><br/><button onClick={this.handleClick(deny)}>Deny</button></td>
                  </tr>
              )
            })}
          </tbody>

        </table>

      </div>
    );
  }

}

export default ViewRequest;
