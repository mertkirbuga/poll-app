import React, { Component } from "react";
import axios from "axios";

import DetailedQuestionCard from "../../components/QuestionCard/DetailedQuestionCard/DetailedQuestionCard";

class QuestionDetails extends Component {
    state = {
        detailCard: null,
        loading: true,
    };
    componentDidMount() {
        let queryString = this.props.location.pathname.substring(9);
        if (!this.state.detailCard) {
            axios
                .get(queryString)
                .then((res) => {
                    console.log(res.data);
                    this.setState({ detailCard: res.data });
                    this.setState({ loading: false });
                })
                .catch((err) => {
                    console.trace(err);
                });
        }
    }

    onClickVoteHandler = (url) => {
        axios
            .post(url)
            .then((res) => {
                let updatedChoice;

                this.state.detailCard.choices.forEach((choice, index) => {
                    if (choice.url === res.data.url) {
                        updatedChoice = {
                            ...this.state.detailCard,
                            choices: [...this.state.detailCard.choices],
                        };
                        updatedChoice.choices[index] = res.data;
                    }
                });
                this.setState({ detailCard: updatedChoice });
                this.setState({ loading: false });
            })
            .catch((err) => {
                console.trace(err);
            });
    };

    render() {
        let detailedCard = null;
        if (!this.state.loading) {
            detailedCard = (
                <DetailedQuestionCard
                    question={this.state.detailCard.question}
                    choices={this.state.detailCard.choices}
                    published={this.state.detailCard.published_at}
                    voted={this.onClickVoteHandler}
                />
            );
        }
        return <div>{detailedCard}</div>;
    }
}

export default QuestionDetails;
