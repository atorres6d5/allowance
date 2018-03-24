import React from 'react';
import axios from 'axios'


const handleYes = ( ) =>{
  // axios.patch('http://localhost:3000/api/request/')
}

const handleNo = ( ) =>{
  console.log("no");
}


const HandleReq = ({req}) => (
  <div>
    <h2>{req.name} wants more money</h2>
    <h3>${req.amount}</h3>
    <p>{req.memo}</p>
    <div>
      <button onClick={handleYes}>Approve</button>
      <button onClick={handleNo}>Deny</button>
    </div>
  </div>
);

export default HandleReq;
