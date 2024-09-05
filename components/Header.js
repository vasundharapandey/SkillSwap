import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Import the image from the assets folder
const logo = require('../assets/logo.jpg');

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Image source={logo} style={styles.logo} resizeMode='contain'/>
      <Text style={styles.headerText}>Skill</Text><Text style={styles.headerText}>Swap</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    flexDirection: 'row', // Arrange logo and text horizontally
  },
  logo: {
    width: 80, // Adjust width as needed
    height: 80, // Adjust height as needed
    marginRight: 10, // Space between logo and text
  },
  headerText: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  // skillText: {
  //   color: 'blue',
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
  // swapText: {
  //   color: 'white',
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
});

export default Header;
