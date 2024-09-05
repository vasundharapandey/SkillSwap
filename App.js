import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
import SwapScreen from './screens/SwapScreen';
import CommunityScreen from './screens/CommunityScreen';
import ProfileScreen from './screens/ProfileScreen';
import ChatScreen from './screens/ChatScreen';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Header from './components/Header'; // Import the custom Header component

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

// Create Stack Navigator for SWAP Screen
const SwapStack = createStackNavigator();

function SwapStackScreen() {
  return (
    <SwapStack.Navigator>
      <SwapStack.Screen
        name="SwapScreen"
        component={SwapScreen}
        options={{
          header: () => <Header title="Skill Swap" />, // Custom header for SwapScreen
        }}
      />
      <SwapStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          header: () => <Header title="Skill Swap" />, // Custom header for ChatScreen
        }}
      />
    </SwapStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Map') {
              iconName = 'map-pin'; // Feather icon for Map
              return <Feather name={iconName} size={size} color={color} />;
            } else if (route.name === 'SWAP') {
              iconName = 'swap'; // AntDesign icon for SWAP
              return <AntDesign name={iconName} size={size} color={color} />;
            } else if (route.name === 'Community') {
              iconName = 'group'; // FontAwesome icon for Community
              return <FontAwesome name={iconName} size={size} color={color} />;
            } else if (route.name === 'Dash') {
              iconName = 'dashboard'; // MaterialIcons icon for Profile
              return <MaterialIcons name={iconName} size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Dash"
          component={ProfileScreen}
          options={{
            header: () => <Header title="Skill Swap" />, // Custom header for ProfileScreen
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            header: () => <Header title="Skill Swap" />, // Custom header for MapScreen
          }}
        />

        {/* Wrap SWAP screen in a StackNavigator */}
        <Tab.Screen
          name="SWAP"
          component={SwapStackScreen}
          options={{
            headerShown: false, // Header for SWAP is inside the stack navigator
          }}
        />

        <Tab.Screen
          name="Community"
          component={CommunityScreen}
          options={{
            header: () => <Header title="Skill Swap" />, // Custom header for CommunityScreen
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
