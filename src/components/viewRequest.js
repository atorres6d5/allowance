import React, { Component } from 'react';
import '../css/viewRequest.css'
class ViewRequest extends Component {
  constructor(props){
    super(props)
    this.state={
      request:[{name:"Ben Kenobi", amount:25, memo:"I need money for lunches this week"}, {name:"Ben Kenobi", amount:25, memo:"I need money for lunches this week"}, {name:"Ben Kenobi", amount:25, memo:"I need money for lunches this week"}]
    }
  }

  handleClick = () => {
    console.log("Brings up view to handle request of money");
  }


  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Memo</th>
          </tr>
          <tbody>
            {this.state.request.map((req, i)=>{
              return(
                  <tr key={i} onClick={this.handleClick}>
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
