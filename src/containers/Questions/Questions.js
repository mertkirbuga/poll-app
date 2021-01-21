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
                console.log(response.data);
                this.setState({questions: response.data});
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        let questionCards = this.state.questions.map( card => (
            <QuestionCard 
                key={card.url}
                questionHeader={card.question}
                questionChoices={card.choices}/>
        ));
        return(
            <div className={classes.Questions}>
                <button>Create A New Question</button>
                {questionCards}
            </div>
        )
    }
}

export default Questions;