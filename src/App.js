import React, { Component } from 'react';
import Riders from './Components/Riders'
import RidesSignup from './Components/RidesSignup';

class App extends Component {
  constructor(){
      super();
      this.state={
        riders:[]
      }
  }

  componentWillMount(){
    this.setState({
      riders: [
        {
          name: "Joyce Ho",
          address: "515 Kelton",
          service: "Morning"
        },
        {
          name: "Georgie Mathews",
          address: "424 Veteran",
          service: "Morning"
        }
      ]
    });
  }

  handleNewRideSignup(rider){
    let allRiders = this.state.riders;
    allRiders.push(rider);
    this.setState({riders:allRiders});
  }

  render() {
    return (
      <div className="App" align="center">
      <RidesSignup newRideSignup={this.handleNewRideSignup.bind(this)}/>
      <Riders riders={this.state.riders} />
      </div>
    );
  }
}

export default App;
