import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import COLORS from './consts/colors';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import Test from './screens/Test';
import BookingDetailsScreen from './screens/BookingDetailsScreen';


const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="bookingConf" component={Test} />
        <Stack.Screen name="bookingDetails" component={BookingDetailsScreen} />



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;