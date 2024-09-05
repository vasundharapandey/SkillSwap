// screens/ProfileScreen.js
import React from 'react';
import { ScrollView, StyleSheet,SafeAreaView, View } from 'react-native';
import Greeting from '../components/Greeting';
import CommunitiesJoined from '../components/CommunitesJoined';
import UpcomingEvents from '../components/UpcomingEvents';
import SkillBuddies from '../components/SkillBuddies';
import CalendarWithEvents from '../components/CalendarWithEvents';
import { Card } from 'react-native-paper';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{marginTop:14}} >
    <ScrollView contentContainerStyle={styles.container}>
      {/* Greeting Section */}
    <View style={{marginTop:14}}>
        <Greeting />
        </View>

      {/* Communities Joined Section */}
      <Card style={styles.card}>
        <CommunitiesJoined />
      </Card>


      {/* Upcoming Events Section */}
      <Card style={styles.card}>
        <UpcomingEvents />
      </Card>

      {/* Skill Buddies Section */}
      <Card style={styles.card}>
        <SkillBuddies />
      </Card>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#fff',

  },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    padding: 15,
    elevation: 3,
    backgroundColor: '#ffffff',
  },
});

export default ProfileScreen;
