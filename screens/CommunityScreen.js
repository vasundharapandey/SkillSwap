import React, { useState } from 'react';
import { ScrollView, StyleSheet, SafeAreaView, Text, View, Alert } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';
//import Community from '../components/CommunityJoin';
// Define the list of communities
const communities = [
    { name: 'Book Lovers', members: 150 },
    { name: 'Football Enthusiasts', members: 200 },
    { name: 'Wizards of HipHop', members: 250 },
    { name: 'Graphic Designers', members: 180 },
    { name: 'Bharatnatyam Dancers', members: 220 },
    { name: 'Basketball Players', members: 170 },
    { name: 'Nutritionists Gang', members: 140 },
    { name: 'Gym Enthusiasts', members: 190 },
    { name: 'Travel Buffs', members: 160 },
    { name: 'Web Developers', members: 210 },
  ];
  
// CommunityCard Component
const Community = ({ communityName, members }) => {
  const [joined, setJoined] = useState(false);

  const handleToggleJoin = () => {
    if (joined) {
      setJoined(false);
      Alert.alert('Success', 'You have left the community.');
    } else {
      setJoined(true);
      Alert.alert('Success', 'You have joined the community!');
    }
  };

  return (
    <Card containerStyle={styles.card}>
      <View style={styles.cardContent}>
      <Icon
  name="trending-up"
  type="material-community"
  color="blue"
  size={25}
/>

        <View style={styles.textContainer}>
          <Text style={styles.communityName}>{communityName}</Text>
          <Text style={styles.members}>{members} members</Text>
        </View>
        <Button
          title={joined ? 'Leave' : 'Join'}
          buttonStyle={joined ? styles.unjoinButton : styles.joinButton}
          onPress={handleToggleJoin}
        />
      </View>
    </Card>
  );
};

// CommunityScreen Component
const CommunityScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.screenTitle}>Join a Learning Community</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.communityList}>
          {communities.map((community, index) => (
            <Community
              key={index}
              communityName={community.name}
              members={community.members}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 14,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
    marginVertical: 20,
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  communityList: {
    flexDirection: 'column',
  },
  card: {
    backgroundColor: '#eeef',
    height:'8%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignContent:'center',
    elevation: 3,
    marginBottom: 20,
    borderColor: '#e6e6e6',
  },
  cardContent: {
    flexDirection: 'row',
 
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  communityName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  members: {
    fontSize: 14,
    color: '#666',
  },
  joinButton: {
    backgroundColor: 'blue',
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  unjoinButton: {
    backgroundColor: 'red',
    borderRadius: 20,
    paddingHorizontal: 16,
  },
});

export default CommunityScreen;
