import React, { Component  } from "react";
import axios from "axios";

import NewQuestionCard from "../../components/NewQuestionCard/NewQuestionCard";

class NewQuestion extends Component {
    state = {
        question: null,
        choices: [],
        formElements:[]
    }

    componentDidMount() {
        let formElementItems = [
            {
                id:"question",
                placeholder: "Type your question here",
                value:""
            },
            {
                id:"1",
                placeholder: "Enter poll option",
                value:""
            },
            {
                id:"2",
                placeholder: "Enter poll option",
                value:""
            },
            {
                id:"3",
                placeholder: "Enter poll option",
                value:""
            }
        ];
        this.setState({formElements: formElementItems});
    }

    createNewPollOption = () => {
        let newId = this.state.formElements.length.toString();
        let pollOption =  {
                             id: newId,
                             value:"",
                             placeholder:"Enter poll option"};
        let prevState = [
            ...this.state.formElements
        ];
        prevState = prevState.concat(pollOption);
        this.setState({formElements: prevState});
    }

    inputChangeHandler = (event, id) => {
        let value = event.target.value;
        if(id === "question") {
            this.setState({question: value });
        } else {
            let updatedChoice = [
                ...this.state.choices,
            ];
            updatedChoice[id] = value;
            this.setState({choices: updatedChoice});
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        if(this.state.question === undefined || this.state.question === "" || this.state.question === null) {
            alert("Question field cannot be empty!");
            return;
        }
        let choices = [
            ...this.state.choices
        ];
        choices = choices.filter( element => {
            return element !== undefined;
        });
        if(choices.length <= 1) {
            alert("Please enter more than 1 poll option !");
            return;
        }
        const newQuestion = {
            question: this.state.question,
            choices: choices
        };
        axios.post("/questions?", newQuestion)
            .then(res => {
                this.props.history.push("/");
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return(
            <div>
                 <NewQuestionCard
                    addPoll={this.createNewPollOption}
                    formElements={this.state.formElements}
                    submitHandler={this.submitHandler}
                    changeHandler={this.inputChangeHandler} />
            </div>
        )
    }
}

export default NewQuestion;