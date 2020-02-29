import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Home from  './Screens/Home';
import Planet from './Screens/Planet';
import Booking from './Screens/Booking';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
     
        <Home/>
           {/* <Planet/> */}
        {/* <Booking/> */}
      </View>
    );
  }
}
