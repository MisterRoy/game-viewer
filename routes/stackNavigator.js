import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import HomePage from "../screens/HomePage";
import appColors from '../global/colors'
import GameDetailsPage from "../screens/GameDetailsPage";

const Stack = createSharedElementStackNavigator();

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
          title: 'Game details',
          gestureEnabled: false,
          transitionSpec: {
            open: {animation: 'timing', config: {duration: 500}},
            close: {animation: 'timing', config: {duration: 500}}
          }
        }}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const { item } = route.params;
          return [
            {
              id: 'photo',
              animation: 'fade-out',
              resize: 'stretch',
              
            }
          ];
        }}
      />
      
    </Stack.Navigator>
  );
}
