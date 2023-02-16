import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';
import * as Font from "expo-font";
import ChatListScreen from "../Screens/ChatListScreen";
import ChatSettingScreen from "../Screens/ChatSettingScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../Screens/SettingsScreen";
import ChatScreen from "../Screens/ChatScreen";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerTitle: '',headerShadowVisible:false }}>
      <Tab.Screen name="ChatList" component={ChatListScreen} options={{
        tabBarLabel: 'Chats',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="chatbubble-outline" size={ size } color={ color }  />
        )
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="settings-outline" size={ size } color={ color } />
        )
      }}/>
    </Tab.Navigator>
  )
}

const MainNavigator =props=>{

  
 
return(
    <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ChatScreen"
      component={ChatScreen}
      options={{
        headerTitle:"",
        headerBackTitle:"Back"
      }}
    />
     <Stack.Screen
      name="ChatSettings"
      component={ChatSettingScreen}
      options={{
        headerTitle: "Settings",
      }}
    />
  </Stack.Navigator>
);
};
export default MainNavigator;