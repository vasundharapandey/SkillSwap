import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CommunityScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community Screen</Text>
      <View style={styles.communityPlaceholder}>
        <Text>Community Forums/Chats will be displayed here</Text>
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
  communityPlaceholder: {
    height: 300,
    width: '90%',
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
});

export default CommunityScreen;
