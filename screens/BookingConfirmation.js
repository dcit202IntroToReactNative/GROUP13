import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        You have successfully booked a hostel.
      </Text>
      
    </View>
  );
}

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
