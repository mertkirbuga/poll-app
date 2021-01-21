import React from "react";
import classes from "./QuestionCard.module.css";
import "font-awesome/css/font-awesome.min.css";

const questionCard = (props) => {
    return (
        <div className={classes.QuestionCard}>
            <h1>{props.questionHeader}</h1>
            {props.questionChoices.map((choice) => (
                <li key={choice.url}>
                    {choice.choice}
                    <i class="fa fa-heart"></i>
                    {choice.votes}
                </li>
            ))}
        </div>
    );
};

export default questionCard;
