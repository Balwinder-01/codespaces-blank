import React from "react";
import {useParams,Link}from 'react-router-dom';
import upvote from "../../assets/uparrow.svg"
import downvote from "../../assets/downarrow.svg"
import "./questionDetails.css"
import Avatar from "../../components/Avatar/Avatar"
import DisplayAnswers from "./DisplayAnswers";

const Questiondetails = () => {
    const { id }=useParams()
    var questionsList = [
        {
            _id: '1',
            upvotes: 3,
            downvotes: 2,
            noOfAnswers: 2,
            QuestionTitle: "What is a Function?",
            questionBody: "It meant to be",
            questionTags: ["java", "node js", "react js", "mongodb"],
            userPosted: "mano",
            userId: 1,
            askedOn: "jan 1",
            answer:[{
                answerBody: "Answer",
                userAnswered: "Kumar",
                answeredOn:"jan 2",
                userId:2,
        }]
        },
        {
            _id: '2',
            upvotes: 3,
            downvotes: 2,
            noOfAnswers: 0,
            QuestionTitle: "What is a Function?",
            questionBody: "It meant to be",
            questionTags: ["javaScript", "R", "Python"],
            userPosted: "mano",
            userId: 2,
            askedOn: "jan 1",
            answer:[{
                answerBody: "Answer",
                userAnswered: "Kumar",
                answeredOn:"jan 2",
                userId:2,
        }]
        },
        {
            _id: '3',
            upvotes: 3,
            downvotes: 2,
            noOfAnswers: 0,
            QuestionTitle: "What is a Function?",
            questionBody: "It meant to be",
            questionTags: ["javaScript", "R", "Python"],
            userPosted: "mano",
            userId: 3,
            askedOn: "jan 1",
            answer:[{
                answerBody: "Answer",
                userAnswered: "Kumar",
                answeredOn:"jan 2",
                userId:2,
        }]
        },
    ];
    
    return (
        <div className="question-details-page">

        {
            questionsList===null?
            <h1>Loading...</h1>:
            <>
                {
                    questionsList.filter(question => question._id === id).map(question=>(
                        <div key={question._id}>

                            <section className="question-details-container">
                            <h1>{question.QuestionTitle}</h1>
                                <div className="question-details-container-2">
                                    <div className="question-votes">
                                        <img src={upvote} alt="" width='18' className="votes-icon"/>
                                        <p>{question.upvotes - question.downvotes}</p>
                                        <img src={downvote} alt="" width='18' className="votes-icon"/>
                                    </div>
                                    <div style={{width:"100%"}}>
                                        <p className="question-body">{question.questionBody}</p>
                                        <div className="question-details-tags">
                                            {
                                                question.questionTags.map((tag)=>(
                                                    <p key={tag}>{tag}</p>
                                                ))
                                            }
                                        </div>
                                        <div className="question-actions-user">
                                            <div>
                                                <button type="button">Share</button>
                                                <button type="button">Delete</button>
                                            </div>
                                        
                                        <div>
                                            <p>Asked on  {question.askedOn}</p>
                                            <Link to={`/user/${question.userId}`} className="user-link" style={{color:"#0086d8"}}>
                                                <Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                <div>
                                                    {question.userPosted}
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </section>
                            {
                                question.noOfAnswers!==0  &&(
                                    <section>
                                        <h3>{question.noOfAnswers} Answers</h3>
                                        <DisplayAnswers key={question._id} question={question}/>
                                    </section>
                                )
                            }
                            <section className="post-ans-container">
                                <h3>Your Answer</h3>
                                <form>
                                    <textarea name="" id="" cols="30" rows="10"></textarea>
                                    <input type="submit" className="post-ans-btn" value='post your Answer' />
                                </form>
                                <p>
                                    Browse other question taggged
                                    {
                                        question.questionTags.map((tag)=>(
                                        <Link to='/Tags' key={tag} className="ans-tags"> {tag} </Link>
                                        ))

                                    } or {
                                        <Link to='/AskQuestion'style={{textDecoration:"none",color:"#009dff"}}>ask your own question</Link>
                                    }
                                </p>
                            </section>
                        </div>
                    ))
                }
            </>
        }
            
        </div>
    )
};

export default Questiondetails;
