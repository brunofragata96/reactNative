import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  ScrollView, 
  Image, 
  Button, 
  Alert, // pomos assim para não ficar um comboio gigante e ser mais facil de sabermos o que adicionar
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import Agradecimento from './components/agradecimento'
import  styles, { version } from './styles/styles' // colocar .js não muda em nada o ficheiro, este import styles não é igual ao export deffault styles, podem não ter nomes iguais que funciona na mesma  
import strings from './strings/strings'

/*const Thnx = ({pessoa}) => {
  return <View>
      <Text>Olá {pessoa}</Text>
    </View>
} */

export default class App extends React.Component {
  
    constructor (props) { //temos que usar o constructor devido a termos o split, map e join
      super(props) ;
      this.state = {
        text: ""
      }
    }
    render() {
      return (
    <View style={styles.masterContainer} >
      <View style={{flex:1}}>
        <TextInput  // ao fazer textinput com espaço ex: "as as as as as" adiciona pizzas por baixo do textinput, https://facebook.github.io/react-native/docs/handling-text-input.html
            style={{height: 40}}
            placeholder="Type here to translate!"
            value={this.state.text} // com isto temos um input controlado
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={{padding: 10, fontSize: 42}}> 
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')} 
          </Text> 
          <Button
            onPress={() => {
            Alert.alert('You tapped the button!');}}
            title="Press Me"
            />
          <TouchableOpacity 
            onPress={() => {
              Alert.alert('You tapped the Touchable!');}}
              title="Press Touchable">
            <Text>Touchable</Text>
          </TouchableOpacity>
          <TouchableNativeFeedback
              onPress={() => {} }>
              <View style={styles.button}>
                <Text style={styles.buttonText}>            
                {Platform.OS === 'android' ? 'é um android' : 'não é um android'}
                {Platform.OS === 'ios' ? 'é um ios' : 'não é um ios'}
                </Text>
              </View> 
          </TouchableNativeFeedback>
      </View>
      <View style={{flex:2, backgroundColor: '#00f'}}>
        <ScrollView >
          <View style={styles.container}>
          <Text style={styles.textStyle}>>Open up App.js to start working on your app!</Text>
          <Text style={[styles.textStyle , styles.textRed ]}>>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Text> hello, how are you?</Text>
          <Text>hey link</Text>
  
          <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}} style={{width:100, height:100}} />
          <Agradecimento pessoa="Jorge"/>
          <Agradecimento pessoa="Tiago"/>
          <Agradecimento pessoa="Mariana"/>
          <Agradecimento pessoa="Xavier"/>
          </View>
        </ScrollView>
      </View>
    </View>
      ); // para baixo ha maneiras de comunicar e para cima ha formas especificas de comunicar, isto é atravez de hierarquia, cima pais, baixo filhos
    }
  }
  

/* const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
