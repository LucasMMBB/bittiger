const fs = require('fs');
// request: npm install fs-readfile-promise
const readFile = require('fs-readfile-promise');

readFile('./log.txt')
    .then(data => {
        data = data.toString();
        res(data);
    })
    .catch(err => {console.log(err)});


let res = (data) => {  
    errIndex = data.indexOf("ERROR");
    OKstr = data.substring(0, errIndex);
    ERRORstr = data.substring(errIndex, data.length);
    console.log(OKstr);
    console.log(ERRORstr);

    // parse ok data
    let indices = []
    for(let i = 0; i < OKstr.length; i++){
        if (OKstr[i] === " ") indices.push(i);
    }// for ends
    let map = {};
    mapLen = 0;
    for(let i = 0; i < indices.length; i++){
        if(i+1 == indices.length) break;
        key = OKstr.substring(indices[i] + 1, indices[i+1]);
        i++;
        value = OKstr.substring(indices[i] + 1, indices[i+1]);
        //console.log(key +" "+ value);
        map[key] = parseInt(value);
        mapLen++;
    }

    // parse error data
    let errInd = []
    for(let j = 0; j < ERRORstr.length; j++){
        if(ERRORstr[j] === " ") errInd.push(j);
    }
    let errmap = {};
    errmapLen = 0;
    for(let j = 0; j < errInd.length; j++){
        if(j+1 == errInd.length) break;
        key = ERRORstr.substring(errInd[j] + 1, errInd[j+1]);
        j++;
        value = ERRORstr.substring(errInd[j] + 1, errInd[j+1]);
        //console.log(key +" "+ value);
        errmap[key] = parseInt(value);
        errmapLen++;
    }
    console.log("======= resultes =======");
    console.log( "Success : failture = "+ mapLen.toString() + " : " + (mapLen - errmapLen).toString());
    console.log("consuming time distribution");
    console.log(map);
    let failmap = {};
    for(let key in map){
        if(!errmap.hasOwnProperty(key)){
            failmap[key] = map[key]
        }
    }
    console.log("error distribution")
    console.log(failmap);
}
/*
fs.readFile('log.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    //console.log(data);
    //console.log(typeof(data));
    errIndex = data.indexOf("ERROR");
    OKstr = data.substring(0, errIndex);
    ERRORstr = data.substring(errIndex, data.length);
    console.log(OKstr);
    console.log(ERRORstr);

    // parse ok data
    let indices = []
    for(let i = 0; i < OKstr.length; i++){
        if (OKstr[i] === " ") indices.push(i);
    }// for ends
    let map = {};
    mapLen = 0;
    for(let i = 0; i < indices.length; i++){
        if(i+1 == indices.length) break;
        key = OKstr.substring(indices[i] + 1, indices[i+1]);
        i++;
        value = OKstr.substring(indices[i] + 1, indices[i+1]);
        //console.log(key +" "+ value);
        map[key] = parseInt(value);
        mapLen++;
    }

    // parse error data
    let errInd = []
    for(let j = 0; j < ERRORstr.length; j++){
        if(ERRORstr[j] === " ") errInd.push(j);
    }
    let errmap = {};
    errmapLen = 0;
    for(let j = 0; j < errInd.length; j++){
        if(j+1 == errInd.length) break;
        key = ERRORstr.substring(errInd[j] + 1, errInd[j+1]);
        j++;
        value = ERRORstr.substring(errInd[j] + 1, errInd[j+1]);
        //console.log(key +" "+ value);
        errmap[key] = parseInt(value);
        errmapLen++;
    }
    console.log("======= resultes =======");
    console.log( "Success : failture = "+ mapLen.toString() + " : " + (mapLen - errmapLen).toString());
    console.log("consuming time distribution");
    console.log(map);
    let failmap = {};
    for(let key in map){
        if(!errmap.hasOwnProperty(key)){
            failmap[key] = map[key]
        }
    }
    console.log("error distribution")
    console.log(failmap);
});



*/


// part two create a login component
import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}