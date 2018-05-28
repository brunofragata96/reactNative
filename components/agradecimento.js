import React from 'react';
import { Text, View } from 'react-native';
import strings from './../strings/strings'

//      <Text> Olá {pessoa}</Text>

const Agradecimento = ({pessoa}) => {
    return <View>
      <Text>{strings.en.welcome}! {pessoa} </Text>
      </View>
  }

  export default Agradecimento