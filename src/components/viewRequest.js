import React, { Component } from 'react';
import '../css/viewRequest.css'
class ViewRequest extends Component {
  constructor(props){
    super(props)
    this.state={
      request:[{name:"Ben Kenobi", amount:25, memo:"I need money for lunches this week"}, {name:"Ben Kenobi", amount:25, memo:"I need money for lunches this week"}, {name:"Ben Kenobi", amount:25, memo:"I need money for lunches this week"}]
    }
  }

  handleClickYes = (e) => {
    console.log(e.target);
  }

  handleClickNo = (e) => {
    console.log(e.target);
  }


  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Memo</th>
              <th>Approve</th>
            </tr>
          </thead>
          <tbody>
            {this.state.request.map((req, i)=>{
              return(
                  <tr key={i}>
                    <td>{req.name}</td>
                    <td>${req.amount}</td>
                    <td>{req.memo}</td>
                    <td><button onClick={this.handleClickYes}>Approve</button><br/><button onClick={this.handleClickNo}>Deny</button></td>
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
