// components/CommunityCard.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const CommunityCard = ({ communityName, members }) => {
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    setJoined(true);
    Alert.alert('Success', 'You have joined the community!');
  };

  return (
    <Card containerStyle={styles.card}>
      <View style={styles.cardContent}>
        <Icon name="group" type="material" color="#007bff" size={30} />
        <View style={styles.textContainer}>
          <Text style={styles.communityName}>{communityName}</Text>
          <Text style={styles.members}>{members} members</Text>
        </View>
        <Button
          title={joined ? 'Joined' : 'Join '}
          buttonStyle={joined ? styles.joinedButton : styles.joinButton}
          onPress={handleJoin}
          disabled={joined}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    elevation: 3,
    marginBottom: 15,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  communityName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  members: {
    fontSize: 14,
    color: 'gray',
  },
  joinButton: {
    backgroundColor: '#007bff',
  },
  joinedButton: {
    backgroundColor: 'gray',
  },
});

export default CommunityCard;
