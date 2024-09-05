// components/SkillBuddies.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

const buddies = [
  { name: 'John', avatar: 'https://example.com/avatar1.png' },
  { name: 'Sarah', avatar: 'https://example.com/avatar2.png' },
];

const SkillBuddies = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skill Buddies</Text>
      <View style={styles.buddiesContainer}>
        {buddies.map((buddy, index) => (
          <View key={index} style={styles.buddy}>
            <Avatar
              source={{ uri: buddy.avatar }}
              placeholderStyle={styles.placeholder}
              containerStyle={styles.avatarContainer}
              size="medium"
              rounded
              title={buddy.name[0]} // Use the first letter of the name as a fallback
            />
            <Text style={styles.name}>{buddy.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buddiesContainer: {
    flexDirection: 'row',
  },
  buddy: {
    marginRight: 15,
    alignItems: 'center',
  },
  avatarContainer: {
    backgroundColor: '#e0e0e0', // Light grey background if the image fails to load
  },
  placeholder: {
    backgroundColor: '#000',
  },
  name: {
    marginTop: 5,
    fontSize: 14,
  },
});

export default SkillBuddies;
