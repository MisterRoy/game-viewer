import React from 'react';
import {StatusBar} from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from "./routes/stackNavigator";

export default function App(){
  
  const [areFontLoaded] = useFonts({
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'nunito': require('./assets/fonts/Nunito-Regular.ttf'),
    'pattaya': require('./assets/fonts/Pattaya-Regular.ttf')
  });
  
  if (!areFontLoaded){
    return null;
  }
  
  return (
    <NavigationContainer>
      <StatusBar barStyle={'default'}/>
      <StackNavigator />
    </NavigationContainer>
  );
}

