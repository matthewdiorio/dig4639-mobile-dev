import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const styles = StyleSheet.create({
    question:{
        fontSize:30,
        fontWeight:"bold"
    },
    separator:{
        margin:10
    }
  });

  function Separator() {
    return <View style={styles.separator} />;
  }
class QuizQuestion extends React.Component {
    render() {
      return (
      <View>
          <Text style={styles.question}>{this.props.question}</Text>
          {this.props.answers.map((v, i) =>
          <View key = {i + "view"}>
          <Separator key = {i+ "seperator"}/>
          <Button  onPress={() => this.props.nextQuestion(v.correct)} type="button" key ={i}
          title={v.text}/>
          </View>
          )}
          <Separator />
      </View>
  )}
  }

  export default QuizQuestion