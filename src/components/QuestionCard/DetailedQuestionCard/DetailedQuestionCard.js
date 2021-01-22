import React from "react";

import classes from "./DetailedQuestionCard.module.css";

const detailedQuestionCard = (props) => {
    const date = new Date(props.published).toLocaleDateString("tr");
    return (
        <div className={classes.DetailedQuestionCard}>
            <h1>{props.question}</h1>
            {props.choices.map((choice) => (
                <div 
                    key={choice.url}
                    onClick={() => props.voted(choice.url)}>
                    {choice.choice}:
                    <i className="fa fa-heart" style={{paddingLeft: "10px", paddingRight:"5px", color:"#BF360C"}}></i>
                    {choice.votes}
                </div>
            ))}
            <p><span style={{fontWeight: "bold", color: "#CE5B31"}}>Publish Date:</span> {date}</p>
        </div>
    );
};

export default detailedQuestionCard;
