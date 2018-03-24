import React, { Component } from 'react';

const divMargin = {
  margin: "20px"
}

const backColor = {
  backgroundColor: "#999",
  fontSize: "1.2em"
}

const buttonSize = {
  fontSize: "1.2em"
}

class Allowance extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:"Ben",
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
      <div style={divMargin}>
        <form>
          {this.props.name}'s Weekly Allowance<br/>
          Allowance:<input type="number" name="allow" placeholder="$$$" onChange={this.handleAllowance}></input>
        <p>  Pay Day: <select name="day" onChange={this.handlePayday}>
            <option>Pick A Day</option>
            <option value={1}>Sunday</option>
            <option value={2}>Monday</option>
            <option value={3}>Tuesday</option>
            <option value={4}>Wednesday</option>
            <option value={5}>Thursday</option>
            <option value={6}>Friday</option>
            <option value={7}>Saturday</option>
          </select></p>
          <br/>
          <button type="submit" style={buttonSize}>Save Changes</button>
        </form>
      </div>
    );
  }

}

export default Allowance;
