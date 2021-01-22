import React from 'react';

import classes from "./NewQuestionCard.module.css";

import Input from "../UI/Input/Input";

const newQuestionCard = (props) => (
    <div className={classes.NewQuestionCard}>
        <form onSubmit={props.submitHandler}>
            {
                props.formElements.map(element => {
                    return(
                        <Input
                            key={element.id}
                            id={element.id}
                            placeholder={element.placeholder}
                            changed= {(event) => props.changeHandler(event,element.id)} 
                        />
                )})
            }
            <button type="button" onClick={props.addPoll}>Add New Poll Option</button>
            <button>Submit Question</button>
        </form>
    </div>
);

export default newQuestionCard;