// components/UpcomingEvents.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CalendarWithEvents from './CalendarWithEvents';

const events = ['2 Days Later: SIH Hackathon', '5 Days Later: React Native Workshop'];

const UpcomingEvents = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Events</Text>
      <CalendarWithEvents/>
      {events.map((event, index) => (
        <Text key={index} style={styles.eventItem}>
          {event}
        </Text>
      ))}
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
  eventItem: {
    fontSize: 16,
    paddingVertical: 5,
  },
});

export default UpcomingEvents;
