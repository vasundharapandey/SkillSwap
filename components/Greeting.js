import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Greeting = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Good Afternoon!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Greeting;