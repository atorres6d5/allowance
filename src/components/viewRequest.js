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

  handleClick = () => {
    console.log("Brings up view to handle request of money");
  }

  render() {
    return (
      <div style={divStyle}>
        <table>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th style={maxWidth}>Memo</th>
          </tr>
          <tbody>
            {this.state.request.map((req, i)=>{
              return(
                  <tr key={i} onClick={this.handleClick} style={requestStyle}>
                    <td>{req.name}</td>
                    <td>${req.amount}</td>
                    <td>{req.memo}</td>
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
