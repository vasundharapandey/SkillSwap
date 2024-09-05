import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SwapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SWAP Screen</Text>
      <View style={styles.swapPlaceholder}>
        <Text>Skill Exchange Listings will be displayed here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  swapPlaceholder: {
    height: 300,
    width: '90%',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
});

export default SwapScreen;
