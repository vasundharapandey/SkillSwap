import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from './screens/MapScreen';
import SwapScreen from './screens/SwapScreen';
import CommunityScreen from './screens/CommunityScreen';
import ProfileScreen from './screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Map') {
              iconName = 'map-pin'; // Ionicons name for map
              return <Feather name={iconName} size={size} color={color} />;
            } else if (route.name === 'SWAP') {
              iconName = 'swap'; // AntDesign icon for SWAP
              return <AntDesign name={iconName} size={size} color={color} />;
            } else if (route.name === 'Community') {
              iconName = 'group'; // Ionicons name for people
              return <FontAwesome name={iconName} size={size} color={color} />;
            } else if (route.name === 'Dash') {
              iconName = 'dashboard'; // Ionicons name for person
              return <MaterialIcons name={iconName} size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
         <Tab.Screen name="Dash" component={ProfileScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="SWAP" component={SwapScreen} />
        <Tab.Screen name="Community" component={CommunityScreen} />
       
      </Tab.Navigator>
    </NavigationContainer>
  );
}
