import React from "react";
import {Link} from 'react-router-dom';

const Questions = ({questions}) => {
    return (
        <>
        <div className="display-question-container">
            <div className="display-votes-ans">
                <p>{questions.votes}</p>
                <p>votes</p>
            </div>
            <div className="display-votes-ans">
                <p>{questions.noOfAnswers}</p>
                <p>Answers</p>
            </div>
            <div className="display-question-details">
                <Link to ={`/Questions/${questions.id}`} className="question-title-link">
                    {questions.QuestionTitle}
                </Link>
                <div className="display-tags-time">
                    <div className="display-tags">
                        {
                            questions.questionTags.map((tag)=>(
                                <p key={tag}>{tag}</p>
                            ))
                        }
                    </div>
                    <p className="display-time">
                        Asked {questions.askedOn}{questions.userPosted}
                    </p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Questions;
