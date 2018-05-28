import React from 'react';
import { 
  View, 
} from 'react-native';
import  styles, { version } from './styles/styles' // colocar .js não muda em nada o ficheiro, este import styles não é igual ao export deffault styles, podem não ter nomes iguais que funciona na mesma  
import strings from './strings/strings'
import MyTextArea from './componentsLiftState/MyTextArea';
import RandomizeButton from './componentsLiftState/RandomizeButton';



export default class App extends React.Component {
  
    constructor (props) { //temos que usar o constructor devido a termos o split, map e join
      super(props) ;
      this.state = {
        text: ""
      }
      this.handleRandomization = this.handleRandomization.bind(this)
    }
    handleRandomization () {
      console.log('handleRandomization')
    }
    render() {
      return (
    <View style={styles.masterContainer} >
      <MyTextArea text="qualquer coisa!!!"/>
      <RandomizeButton onMyPress={this.handleRandomization}/>
    </View>
      ); // para baixo ha maneiras de comunicar e para cima ha formas especificas de comunicar, isto é atravez de hierarquia, cima pais, baixo filhos
    }
  }
  