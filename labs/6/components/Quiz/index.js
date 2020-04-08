import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import questions from './questions.json'
import QuizQuestion from "../QuizQuestion"
const TIME_LIMIT = 10
const TITLE_STATE = 0
const COUNTDOWN_STATE = 3
const QUESTION_STATE = 1
const FINAL_STATE = 2

const styles = StyleSheet.create({
    title: {
        flex:1,
        fontSize:30,
        textAlign:"center",
        margin:20,
        fontWeight: 'bold'
    },
    timer: {
        textAlign:"center",
        fontSize: 30,
        marginBottom: 5,
        fontWeight:"bold",
        color: "#e34234"
        
    },
    container:{
        alignItems: 'center'
    },
    score:{
        alignItems: 'center',
        justifyContent: 'center',

    }
  });



  

class Home extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        score: 0,
        titleText: "Welcome to our Quiz!",
        counter: 0,
        currentState: TITLE_STATE,
        currentQuestion: 0
      }
      this.timeLimit = TIME_LIMIT
    }
    nextQuestion(correct){
      console.log("BUTTON PRESSED")
      if(correct){
        this.setState({score: this.state.score+1})
      }
      if(this.state.currentQuestion == questions.length-1){
        console.log("DONE")
        clearInterval(this.timer)
        this.setState({currentState:FINAL_STATE, titleText:"Results!" })
      }else {
     //   
        console.log(this.state.currentQuestion)
        this.setState({
          titleText:"You answers X",
          currentState: QUESTION_STATE,
          counter:0,
          currentQuestion: this.state.currentQuestion + 1
        })
      }
    }
    countdown() { 
      if(this.state.counter < this.timeLimit){
        this.setState({
          titleText: 'Starting the Quiz!',
          counter: this.state.counter + 1
        })
      if(this.state.currentState == QUESTION_STATE && this.state.counter == this.timeLimit){
         this.nextQuestion()
      }
      }else {
        this.setState({
          titleText: "Begging Quiz!",
          currentState: QUESTION_STATE,
          counter: 0
        })
        if(this.state.currentState == TITLE_STATE){
          this.timer = setInterval(() => this.countdown(), 1000)
          clearInterval(this.timer)
        } else {
          this.setState({titleText:"You answered!"})
        }
      }
    }
    start() {
      console.log("Starting!")
      this.setState({titleText: "Starting the Quiz!", counter: 0, currentState: COUNTDOWN_STATE})
      this.timer = setInterval(() => this.countdown(), 1000)
    }

    render(){
      return(
        <View>
        {((this.state.currentState === TITLE_STATE) ?
            <View>
                <Text style={styles.title}>{this.state.titleText}</Text>
                <Button title="Start" onPress={()=>this.start()} />
            </View>
        :(this.state.currentState === COUNTDOWN_STATE) ?
            <View>
                <Text style={styles.timer}>{this.timeLimit - this.state.counter}</Text>
                <Text style={styles.title}>{this.state.titleText}</Text>
                
            </View>
        :(this.state.currentState === QUESTION_STATE) ?
            <View>
                <Text style={styles.timer}>{this.timeLimit - this.state.counter}</Text>
                <QuizQuestion answers={questions[this.state.currentQuestion].possibleAnswers} question=
                {questions[this.state.currentQuestion].question} nextQuestion={(correct) => this.nextQuestion(correct)}
                ></QuizQuestion>
            </View>
        :
            <View style={styles.score}>
                <Text style={{fontSize:30}}>Score: {Math.round(100*(this.state.score / questions.length)*100)/100}%</Text>
            </View>
        )}
        
        </View>
        )
    }
  }

  export default Home;