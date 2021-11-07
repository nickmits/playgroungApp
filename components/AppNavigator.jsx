import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import Scanner from './Scanner';
import CommentScreen from './CommentScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor:'#ffffff',
      activeBackgroundColor: 'rgb(95, 187, 113)',
    }}>


      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size}) => (
            <MaterialCommunityIcons name = "home" color={color} size={size}/>
          ),
        }} />

       
      <Tab.Screen
        name="Scan"
        component={Scanner} 
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({ color, size}) => (
            <MaterialCommunityIcons name = "camera" color={color} size={size}/>
          ),
        }}/>  
        
      </Tab.Navigator>

        
  );
} 

  function MyStack() {
    return(
      <Stack.Navigator initialRouteName='Scan'
      screenOptions={{headerShown: false}}
      >
        <Stack.Screen   name="MyTabs" component={MyTabs} />
        <Stack.Screen name="CommentScreen" component={CommentScreen} />
      </Stack.Navigator>
    );
  }
//

  
export default function AppNavigator() {
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}