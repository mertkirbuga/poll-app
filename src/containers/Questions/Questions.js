import React, { Component } from 'react';
import axios from 'axios';

import classes from './Questions.module.css';

import QuestionCard from '../../components/QuestionCard/QuestionCard';

class Questions extends Component {
    state = {
        questions: []
    }
    componentDidMount() {
        axios.get("/questions")
            .then(response => {
                this.setState({questions: response.data});
            })
            .catch(error => {
                console.trace(error);
            })
    }

    questionDetailHandler = (url) => {
        this.props.history.push("/details" + url);
    }

    handleNewQuestion = () => {
        this.props.history.push("/newQuestion");
    }

    render() {
        let questionCards = this.state.questions.map( card => (
            <QuestionCard
                key={card.url}
                questionHeader={card.question}
                questionChoices={card.choices}
                questionDetails={() => this.questionDetailHandler(card.url)} />
        ));
        return(
            <div className={classes.Questions}>
                <button onClick={this.handleNewQuestion}><span className="fa fa-plus fa-2x"></span>Create A New Question</button>
                {questionCards}
            </div>
        )
    }
}

export default Questions;