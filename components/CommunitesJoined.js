// components/CommunitiesJoined.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons'; // Vector icons for communities

const communities = [
  { name: 'Coding', icon: 'code' },
  { name: 'Painting', icon: 'pencil' },
  { name: 'Design', icon: 'object-group' },
];

const CommunitiesJoined = () => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Communities Joined</Title>
      <View style={styles.cardsContainer}>
        {communities.map((community, index) => (
          <Card key={index} style={styles.card}>
            <View style={styles.cardContent}>
              <FontAwesome name={community.icon} size={30} color="#6200ee" />
              <Text style={styles.cardText}>{community.name}</Text>
            </View>
          </Card>
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '30%',
    padding: 10,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#f5f5f5',
  },
  cardContent: {
    alignItems: 'center',
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CommunitiesJoined;
