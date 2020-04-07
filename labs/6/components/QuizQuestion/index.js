import React from 'react';
import {Text, View, Button} from 'react-native';
class QuizQuestion extends React.Component {
    render() {
      return (
      <View>
          <Text h1>{this.props.question}</Text>
          {this.props.answers.map((v, i) =>
          <Button onPress={() => this.props.nextQuestion(v.correct)} type="button" key ={i}
          title={v.text}/>)}
      </View>
  )}
  }
  export default QuizQuestion