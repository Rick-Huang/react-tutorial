import React, { Component } from 'react';
import IndividualRider from './IndividualRider';

class Riders extends Component {
  render() {
    let riderList;
    if(this.props.riders) {
      console.log('rendering')
      riderList = this.props.riders.map(rider => {
        console.log(rider);
        return (
          <IndividualRider key={rider.name} rider={rider} />
        );
      });
    }

    return (
      <div>
        <h3>Riders currently signed up</h3>
        {riderList}
      </div>
    );
  }
}

export default Riders;
