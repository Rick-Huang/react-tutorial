import React, { Component } from 'react';

class RidesSignup extends Component {
  constructor() {
    super();
    this.state={
      newRider:{}
    }
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.refs.name.value == "" || this.refs.name.address == "") {
      alert("Please enter your information");
    }
    else {
      this.setState({
        newRider: {
        name: this.refs.name.value,
        address: this.refs.address.value,
        service:this.refs.service.value,
      }
      }, function(){
        console.log("New rider data");
        console.log(this.state.newRider);
        this.props.newRideSignup(this.state.newRider);
      });
    }
  }


  render() {
    return (
      <div>
        <h3>Rides Signup</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>Name</label><br />
          <input type="text" ref="name" />
        </div>
        <br />
        <div>
          <label>Address</label><br />
          <input type="text" ref="address" />
        </div>
        <br />
        <select ref="service">
          <option key='morning' value='Morning'>Morning</option>
          <option key='staying' value='Staying'>Staying</option>
          <option key='evening' value='Morning'>Evening</option>
        </select>
        <br />
        <br />
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default RidesSignup;
