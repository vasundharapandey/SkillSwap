import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Map Screen</Text>
      <View style={styles.mapPlaceholder}>
        <Text>Map will be displayed here</Text>
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
  mapPlaceholder: {
    height: 300,
    width: '90%',
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
});

export default MapScreen;
