// components/CalendarWithEvents.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

// Random marked dates with circle style
const markedDates = {
  '2024-09-08': { marked: true, dotColor: 'tomato' },
  '2024-09-15': { marked: true, dotColor: 'tomato' },
  '2024-09-21': { marked: true, dotColor: 'tomato' },
  '2024-09-30': { marked: true, dotColor: 'tomato' },
};

const CalendarWithEvents = () => {
  return (
    <View style={styles.container}>
      <Calendar
        markedDates={markedDates}
        theme={{
          selectedDayBackgroundColor: '#00adf5',
          todayTextColor: '#00adf5',
          dotColor: 'red',
          arrowColor: 'orange',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default CalendarWithEvents;
