import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import appColors from "../global/colors";
import Label from "./Label";


export default function ListItem(
  {
    imageSource='https://media.rawg.io/media/screenshots/779/779a4846cb63b583b01bbf6bc666dd21.jpg',
    title='Grand Theft Auto: Chinatown Wars Episode From Liberty City',
    releaseDate='Release date',
    genre='Action'
  
}){
  
  return (
      <View
        style={styles.container}
      >
        <Image
          source={{uri: imageSource}}
          style={styles.image}
    
        />
        <View style={styles.block}>
      
          <View style={styles.header}>
            <Text
              style={styles.title}
            >
              { title }
            </Text>
          </View>
      
          <View style={styles.body}>
            <Label title={releaseDate}/>
            <Label title={genre}/>
          </View>
          
    
        </View>
      </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderRadius: 8,
    borderColor: appColors.secondaryColor,
    minWidth: '97%',
    minHeight: 135,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: -2
  },
  image: {
    flex: 2,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    margin: 5,
    resizeMode: 'stretch',
    
  },
  block: {
    flex: 3,
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    alignItems: 'center',
  },
  header:{
    flex: 3
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  title: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    color: appColors.whiteColor
  }
});
