import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Quiz from './components/Quiz'



export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Quiz/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#7d7',
    padding:20,
    justifyContent:'center'
  },
});
