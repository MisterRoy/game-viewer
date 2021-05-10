import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from "../screens/HomePage";
import appColors from '../global/colors'
import GameDetailsPage from "../screens/GameDetailsPage";

const Stack = createStackNavigator();

export default function StackNavigator(){
  return (
    <Stack.Navigator
      initialRoute='HomePage'
      screenOptions={{
        headerTintColor: appColors.primaryColor,
        headerTitleStyle: {
          fontFamily: 'pattaya',
          fontSize: 20
        },
        headerStyle: {
          backgroundColor: appColors.backgroundColor,
        }
      }}
    >
      
      <Stack.Screen
        name={'HomePage'}
        component={HomePage}
        options={{
          title: 'Game Viewer'
        }}
      />
      <Stack.Screen
        name={'GameDetailsPage'}
        component={GameDetailsPage}
        options={{
          title: 'Game details'
        }}
      />
      
    </Stack.Navigator>
  );
}
