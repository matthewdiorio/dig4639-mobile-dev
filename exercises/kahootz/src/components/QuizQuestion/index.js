import React from 'react'

class QuizQuestion extends React.Component {
    render(){
        return(
            <>
            <h2>{this.props.question}</h2>
            {this.props.answers.map((v, index) => {
                return <input type = "button"
                value={v.text}
                key={index}
                className = "answerButton"
                onClick={() => this.props.nextQuestion()}></input>
            })}
            </>
        )
    }
}

export default QuizQuestion