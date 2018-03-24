import React from 'react';



const handleYes = ( ) =>{
  console.log("yes");
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
