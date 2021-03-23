import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
function CreateUser() {
  return (
      <><div className="container">
    <div className="row">
        <div className="col-lg-5">
            <label>username</label>
            <input className="form-control" type="text"/>
          </div>
          <div className="col-lg-5">
          <label>Email</label>
            <input className="form-control" type="email"/>
          </div>
          </div>
          <div className="row">
              <div className="col-lg-3">
              <button className="btn btn-primary">Add User</button>
          </div>
          </div> 
          </div>   
    </>
  );
}
export default CreateUser;
