import React, { Component } from 'react';

class AddKid extends Component {
  constructor(){
    super()
    this.state = {
      username:"",
      pass:"",
      name:""
    }
  }

  handleUsername = (e) =>{
    this.setState({
      username:e.target.value
    })
  }

  handlePass = (e) =>{
    this.setState({pass:e.target.value})
  }

  handleName = (e) =>{
    this.setState({name:e.target.value})
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    console.log(this.state, "make api call here")
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Username: <input type="text" name="username" value={this.state.username} onChange={this.handleUsername}/>
          Password: <input type="text" name="password" value={this.state.pass} onChange={this.handlePass} />
          <p>User Type:</p>
          <select name="userType">
            <option value="parent">Parent</option>
            <option value="child">Child</option>
          </select>
          Name: <input type="text" name="name" value={this.state.name} onChange={this.handleName} />
          <button type="submit">Add new dependant</button>

        </form>
      </div>
    );
  }

}

export default AddKid;
