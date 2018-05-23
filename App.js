import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const Thnx = ({pessoa}) => {
  return <View>
      <Text>Olá {pessoa}</Text>
    </View>
} 

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Image source={{uri:'http://www.gianthit.co.uk/wp-content/uploads/2017/06/facebook-stock-up-446fff24fb11820517c520c4a5a4c032.jpg' }}
            style={{width: 100, height: 100}} />
          <Thnx pessoa="Jorge"/>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Image source={{uri:'http://www.gianthit.co.uk/wp-content/uploads/2017/06/facebook-stock-up-446fff24fb11820517c520c4a5a4c032.jpg' }}
            style={{width: 100, height: 100}} />
          <Thnx pessoa="Jorge"/>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Image source={{uri:'http://www.gianthit.co.uk/wp-content/uploads/2017/06/facebook-stock-up-446fff24fb11820517c520c4a5a4c032.jpg' }}
            style={{width: 100, height: 100}} />
          <Thnx pessoa="Jorge"/>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Image source={{uri:'http://www.gianthit.co.uk/wp-content/uploads/2017/06/facebook-stock-up-446fff24fb11820517c520c4a5a4c032.jpg' }}
            style={{width: 100, height: 100}} />
          <Thnx pessoa="Jorge"/>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Image source={{uri:'http://www.gianthit.co.uk/wp-content/uploads/2017/06/facebook-stock-up-446fff24fb11820517c520c4a5a4c032.jpg' }}
            style={{width: 100, height: 100}} />
          <Thnx pessoa="Jorge"/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
