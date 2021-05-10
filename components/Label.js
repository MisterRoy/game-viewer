import React from "react";
import {Text, View} from 'react-native';
import appColors from '../global/colors'


export default function Label({ title='Label' }){
  
  return(
    <View
      style={{
        borderWidth: 1.5,
        borderRadius: 30,
        minWidth: 65,
        minHeight: 25,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: appColors.secondaryColor
      }}
    >
      <Text
        style={{
          fontSize: 12,
          color: appColors.primaryColor
        }}
      >
        {title}
      </Text>
    </View>
  );
}
