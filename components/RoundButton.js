import React from "react";
import {Text, TouchableOpacity} from 'react-native';
import appColors from '../global/colors'

export default function RoundButton({ title='Button' }){
  
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1.5,
        borderColor: appColors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        width: 300,
        height: 50,
        margin: 15
      }}
    >
      <Text
        style={{
          color: appColors.primaryColor,
          fontSize: 18,
          fontWeight: 'bold'
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
