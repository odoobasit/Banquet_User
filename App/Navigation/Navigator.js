import {createAppContainer} from 'react-navigation';

import Home from '../Screens/Home';
import Planet from '../Screens/Planet';
import Booking from '../Screens/Booking';


import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator=createStackNavigator({
    
    Home:{
        screen: Home ,navigationOptions: {
            headerShown: false,
          }

    },
    Planet:{
        screen: Planet ,navigationOptions: {
            headerShown: false,
          }

    },
    Booking:{
        screen: Booking ,navigationOptions: {
            headerShown: false,
          }

    },
    
    })
    export default createAppContainer(AppNavigator);