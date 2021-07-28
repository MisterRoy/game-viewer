import React, {useEffect, useState} from "react";
import {SafeAreaView, ScrollView, StyleSheet, View, Text, Image, ActivityIndicator, Alert} from 'react-native';
import {globalStyles} from "../global/styles";
import RoundButton from "../components/RoundButton";
import appColors from "../global/colors";
import Label from "../components/Label";
import {getGameDetails} from "../services/RawgApi";
import {getCurrentTime} from "../services/currentTime";
import { SharedElement } from 'react-navigation-shared-element';


export default function GameDetailsPage(
  {
    route
  }
){
  const gameId = route.params.id;
  
  const [gameDetails, setGameDetails] = useState({});
  
  const [infoLoaded, setInfoLoaded] = useState(false);
  
  const handleChange = (details) =>{
    if(details == null){
      Alert.alert('Oops', 'Un error occurred. Please check your connectivity.', [
        {
          text: "OKAY"
        }
      ]);
      setInfoLoaded(false);
    }
    else{
      setGameDetails(details);
      setInfoLoaded(true);
    }
    
  }
  
  useEffect(() =>{+
    getGameDetails(gameId, handleChange);
  }, [])
  
  
  console.log('\n' + getCurrentTime() + 'GameDetailsPage component loaded');
  
 
  if(!infoLoaded){
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator size={50} color={appColors.primaryColor}/>
      </View>
    );
  }
  else{
    return (
      <SafeAreaView style={globalStyles.container}>
        <View style={styles.upper}>
          
          <SharedElement id={'photo'}>
            <Image
              source={{uri: gameDetails.imageUri}}
              style={styles.image}
            />
          </SharedElement>
          
          
        </View>
        <View style={styles.lower}>
          <View style={styles.header}>
            <Text style={styles.title}>{gameDetails.title}</Text>
          </View>
          <View style={styles.infos}>
            <Label title={gameDetails.releaseDate}/>
            <Label title={gameDetails.genre.name}/>
            <Label title={gameDetails.rating}/>
          </View>
          <View style={styles.body}>
            <ScrollView>
              <Text style={styles.text}>
                {gameDetails.description}
              </Text>
            </ScrollView>
          </View>
          <View style={styles.footer}>
            <RoundButton title={'More infos'}/>
          </View>
    
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  upper: {
    flex: 1,
    width: '120%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0
  },
  lower: {
    flex: 1.5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    // TODO : width & height must have a absolute value
    width: 500,
    height: 400,
    // width: '100%',
    // height: '100%'
  },
  header: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  infos: {
    flex: 0.75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  body: {
    flex:3,
    width: '100%',
    paddingLeft: 12,
    paddingRight: 12
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
    fontFamily: 'nunito-bold',
    textAlign: 'center',
    color: appColors.whiteColor,
  },
  text: {
    fontSize: 15,
    textAlign: 'justify',
    color: appColors.whiteColor,
    marginBottom: 10
  }
});
