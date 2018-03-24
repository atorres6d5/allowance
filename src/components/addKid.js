import React, { Component } from 'react';

class addKid extends Component {
  constructor(){
    super(){
      this.state = {
        username:"",
        pass:"",

      }
    }
  }


  handleUsername = () =>{

  }

  handlePass = () =>{

  }

  render() {
    return (
      <div>
        <form>
          Username: <input type="text" name="username" value={this.state.username} onChange={this.handleName}/>
          Password: <input type="text" name="password" value={this.state.pass} onChange={this.handlePass} />
          type: 

        </form>
      </div>
    );
  }

}

export default addKid;
