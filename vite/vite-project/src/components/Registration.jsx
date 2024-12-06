import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function Registration({regdata}) {
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
function getData(e){
    e.preventDefault();
    const data={
        name:name,
        email:email,
        password:password
    };
    regdata(data);
}
  return (

    <div>
      <h1>It is registration page</h1>
  
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name"></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <br />
        <button onClick={getData} type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Registration