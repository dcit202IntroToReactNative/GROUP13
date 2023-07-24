import React from 'react';
import {
 
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Constants from 'expo-constants';
import CustomButton from '../CustomButton';


// You can import from local files
import AssetExample from '../components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';



const BookingDetailsScreen = ({navigation, route}) => {
  const item = route.params;

  const handleButtonPress = () => {
    // Your logic when the button is pressed
    console.log('Button pressed!');
    navigation.navigate('bookingConf');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Booking Details
      </Text>
      
      <Text style={styles.paragraph2}>
        Name: K-Rizzy Him Anderson 
      </Text> 

      <Text style={styles.paragraph2}>
    Hostel Booked: Vikings Hostel 
      </Text>
      <Text style={styles.paragraph2}>
    Price: GH₵100 
      </Text>
      <Text style={styles.paragraph2}>
        Date: 24/7/2023
      </Text> 
      
      <View style={styles.buttonContainer}>
      <CustomButton title="Confirm" onPress={handleButtonPress} />
    </View>

    </View>

  );;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph2: {
    margin:10,
    marginTop:15,
    marginBottom:2,
        fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 25,
    marginTop:80,
    marginBottom:100,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Align the button to the bottom
    marginBottom:20,
  },
  detailscontainer:{
  marginTop:50,
  }
});


export default BookingDetailsScreen;