import React, {Component} from "react";


class Game extends Component {
  constructor(props){
  	super(props);
    const valuesArray = this.makeNewQuestion();
    this.state = {
    	values1: valuesArray[0],
      	values2: valuesArray[1],
      	values3: valuesArray[2],
      	propsedAnswer: valuesArray[3]
    };
  }
  
  makeNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return [value1, value2, value3, proposedAnswer];
  };
	
	// handleAnswer() will be invoked when the button gets clicked;
	// then both check if the answer is right and update the equation;
	handleAnswer = (event) => {
      	const newValuesArray = this.makeNewQuestion();
      	this.updateState(newValuesArray);
    	const answerWasCorrect = this.evaluateAnswer(event.target.name);
      	this.props.handleAnswer(answerWasCorrect);
    };
	
	updateState = (newValuesArray) => {
    	this.setState(currentState => ({
      		value1: newValuesArray[0],
        	value2: newValuesArray[1],
          	value3: newValuesArray[2],
          	proposedAnswer: newValuesArray[3]
        	})
	)
    };

	evaluateAnswer = (givenAnswer) => {
    	const {value1, value2, value3, proposedAnswer} = this.state;
      	const corrAnswer = value1 + value2 + value3;
      	return(
        	(corrAnswer === proposedAnswer && givenAnswer === "true") ||
          	(corrAnswer !== proposedAnswer && givenAnswer === "false")
        )
    };

	render(){
    	const { value1, value2, value3, proposedAnswer } = this.state;
		return(
        	<div>
          		<div className="equation">
          			<p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
				</div>
				<button name="true" onClick={this.handleAnswer}>
					TRUE
				</button>
				<button name="false" onClick={this.handleAnswer}>
					FALSE
				</button>
          	</div>
        );
    }
}

export default Game;