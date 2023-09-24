import React from "react";
import "./HomeMainbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Questions from "./Questions";

const HomeMainbar = () => {
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();
  var questionsList = [
    {
      id: 1,
      votes: 3,
      noOfAnswers: 2,
      QuestionTitle: "What is a Function?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongodb"],
      userPosted: "mano",
      askedOn: "jan 1",
    },
    {
      id: 2,
      votes: 0,
      noOfAnswers: 0,
      QuestionTitle: "What is a Function?",
      questionBody: "It meant to be",
      questionTags: ["javaScript", "R", "Python"],
      userPosted: "mano",
      askedOn: "jan 1",
    },
    {
      id: 3,
      votes: 1,
      noOfAnswers: 0,
      QuestionTitle: "What is a Function?",
      questionBody: "It meant to be",
      questionTags: ["javaScript", "R", "Python"],
      userPosted: "mano",
      askedOn: "jan 1",
    },
  ];

  const checkAuth = () => {
    if (user === null) {
      alert("Login or Signup to ask question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestions");
    }
  };
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Question</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionsList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.length} Questions</p>
            {questionsList.map((questions) => (
              <Questions questions={questions} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
