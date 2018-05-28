import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({ // o stylesheet tem de estar definido, não importa o que estiver importado se não se importar tambem o styleSheet
    textStyle: {
      fontSize: 16
    },
    textRed: {
      color: "#f00",
    } ,
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 30,
    },
    masterContainer: {
        flex: 1,
        backgroundColor: '#f00',
        paddingTop: 30,
    }
  });

  export default styles

  export const version = 1 // significa que estavamos a export uma version = 1
