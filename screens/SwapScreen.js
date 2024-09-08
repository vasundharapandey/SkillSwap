import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SwapScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [profiles, setProfiles] = useState([
    { id: '1', name: 'John Doe', skill: 'Dance' },
    { id: '2', name: 'Jane Smith', skill: 'Music' },
    { id: '3', name: 'Mike Johnson', skill: 'Coding' },
    { id: '4', name: 'Emily Davis', skill: 'Photography' },
  ]);
  const [requestsSent, setRequestsSent] = useState({}); // To track request status
  const navigation = useNavigation(); // Get the navigation object

  // Filter profiles based on search query (matching either skill or name)
  const filteredProfiles = profiles.filter(profile =>
    profile.skill.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to toggle request state (send/withdraw)
  const toggleRequest = (profileId) => {
    setRequestsSent(prev => ({
      ...prev,
      [profileId]: !prev[profileId], // Toggle between true (sent) and false (withdrawn)
    }));
  };

  const renderProfile = ({ item }) => (
    <TouchableOpacity style={styles.profileCard}>
      <Text style={styles.profileName}>{item.name}</Text>
      <Text style={styles.profileSkill}>Skill: {item.skill}</Text>
      <TouchableOpacity onPress={() => toggleRequest(item.id)}>
        {requestsSent[item.id] ? (
          <Text style={styles.withdrawRequest}>Request Sent (Click to Withdraw)</Text>
        ) : (
          <Text style={styles.requestButton}>Send Request</Text>
        )}
      </TouchableOpacity>

      {/* Add a button to navigate to the ChatScreen */}
      <TouchableOpacity onPress={() => navigation.navigate('ChatScreen', { name: item.name })}>
        <Text style={styles.chatButton}>Chat</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Skill Swap</Text> */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name or skill (e.g., Dance, John)"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <FlatList
        data={filteredProfiles}
        keyExtractor={item => item.id}
        renderItem={renderProfile}
        ListEmptyComponent={<Text>No profiles found</Text>}
        style={styles.profileList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color:'white'
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  profileList: {
    marginTop: 20,
  },
  profileCard: {
    padding: 20,
    backgroundColor: '#eee',
    marginBottom: 10,
    borderRadius: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileSkill: {
    fontSize: 16,
    marginTop: 5,
  },
  requestButton: {
    color: 'blue',
    marginTop: 10,
    fontSize: 16,
  },
  withdrawRequest: {
    color: 'red',
    marginTop: 10,
    fontSize: 16,
  },
  chatButton: {
    color: 'green',
    marginTop: 10,
    fontSize: 16,
    textAlign: 'right',
  },
});

export default SwapScreen;
