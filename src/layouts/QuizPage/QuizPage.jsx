import React from "react";
import './QuizPage.css';
import { useLoaderData } from "react-router-dom";
import Quiz from "../../components/Quiz/Quiz";

export default function QuizPage() {
    const data = useLoaderData()
    const quizData = data.data

    return (
        <div className="quiz-page">
            <div className="quiz-container">
                <h2>Quiz of {quizData.name}</h2>
                {
                    quizData.questions.map(quiz => <Quiz key={quiz.id} quiz={quiz}/>)
                }
            </div>
        </div>
    )
}