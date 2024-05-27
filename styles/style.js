import { StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      marginTop: StatusBar.currentHeight + 5, 
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    innerContainer: {
      height: '80%',
      width: '90%',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });