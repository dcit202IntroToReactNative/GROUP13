import React from 'react';
import {
 
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Constants from 'expo-constants';

// You can import from local files
import AssetExample from '../components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


const Test = ({navigation, route}) => {
  const item = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        You have successfully booked a hostel.
      </Text>
      
    </View>
  );;
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    paragraph: {
      margin: 24,
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default Test;