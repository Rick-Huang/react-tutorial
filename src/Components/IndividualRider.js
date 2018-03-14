import React, { Component } from 'react';

class IndividualRider extends Component {
  render() {
    return (
      <div>
      Name: <strong>{this.props.rider.name}</strong> Address: <strong>{this.props.rider.address}</strong> Service: <strong>{this.props.rider.service}</strong>
      </div>
    );
  }
}

export default IndividualRider;
