import React, { Component } from 'react';

class Allowance extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:"Hon Solo",
      allowance:0,
      payDay:1
    }
  }

  handleAllowance = (e) =>{
    this.setState({allowance:e.target.value})
  }

  handlePayday =(e)=>{
    this.setState({payDay:e.target.value})
  }


  render() {
    return (
      <div>
        <form>
          {this.state.name}'s Weekly Allowance<br/>
          Allowance:<input type="number" name="allow" placeholder="$$$" onChange={this.handleAllowance}></input>
          Pay Day: <select name="day" onChange={this.handlePayday}>
            <option>Pick A Day</option>
            <option value={1}>Sunday</option>
            <option value={2}>Monday</option>
            <option value={3}>Tuesday</option>
            <option value={4}>Wednesday</option>
            <option value={5}>Thursday</option>
            <option value={6}>Friday</option>
            <option value={7}>Saturday</option>
          </select>
          <br/>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    );
  }

}

export default Allowance;
