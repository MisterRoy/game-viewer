import React, {useState} from "react";
import {SafeAreaView, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, View, Alert} from 'react-native';
import SearchBar from "../components/SearchBar";
import {globalStyles} from "../global/styles";
import ListItem from "../components/ListItem";
import {getGames} from '../services/RawgApi'
import appColors from "../global/colors";


export default function HomePage({ navigation }){
  
  const [data, setData] = useState([]);
  
  const [infoLoaded, setInfoLoaded] = useState(true);
  
  const displayData = (data) =>{
    if(data.length > 0){
      setData(data);
      setInfoLoaded(true);
    }
    else {
      Alert.alert('Oops', 'Un error occurred. Please check your connectivity.', [
        {
          text: "Got it"
        }
      ]);
      setInfoLoaded(true);
    }
    
  }
  
  const launchSearch = (search='') => {
    setInfoLoaded(false);
    getGames(search, displayData);
  }
  
  const goToDetailsPage = (gameId) => {
    navigation.navigate('GameDetailsPage', {
      'id': gameId
    });
    // console.log(game);
  }
  
  
  if(!infoLoaded){
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator size={50} color={appColors.primaryColor}/>
      </View>
    );
  }
  else {
    return (
      <SafeAreaView style={globalStyles.container}>
        <SearchBar onPress={launchSearch}/>
        <FlatList
          style={styles.list}
          data={data}
          renderItem={({item}) =>
            <TouchableOpacity onPress={() => goToDetailsPage(item.id)}>
              <ListItem
                imageSource={item.imageUri}
                title={item.title}
                genre={item.genre.name}
                releaseDate={item.releaseDate}
              />
            </TouchableOpacity>
          }
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
  }
});
