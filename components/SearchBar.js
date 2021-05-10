import React, {useState} from "react";
import {View, TouchableOpacity, TextInput,StyleSheet} from 'react-native';
import appColors from "../global/colors";
import {MaterialIcons} from '@expo/vector-icons';

export default function SearchBar({ onPress }){
  
  const [searchText, setSearchText] = useState('');
  
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Search game'}
        style={styles.input}
        placeholderTextColor={appColors.secondaryColor}
        selectionColor={appColors.secondaryColor}
        onChangeText={(text) => setSearchText(text)}
        onSubmitEditing={() => onPress(searchText)}
        autoCapitalize={'none'}
      />
      
      <View style={styles.icon}>
        <TouchableOpacity onPress={onPress}>
          <MaterialIcons
            name={'search'}
            size={25}
            color={appColors.secondaryColor}
          />
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 1.2,
    borderRadius: 20,
    borderColor: appColors.secondaryColor,
    minWidth: 350,
    padding: 5,
    paddingLeft: 20,
    margin: 5,
    
  },
  input: {
    color: appColors.primaryColor,
    textAlign: 'left',
    flex: 9,
  },
  icon: {
    flex: 1.2
  }
});
