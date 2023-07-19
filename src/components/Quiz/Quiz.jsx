import React from "react";
import './Quiz.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

export default function Quiz(props) {
    const {question, correctAnswer, options} = props.quiz


    const onOptionChange = e => {
        if (correctAnswer === e.target.value) {
            toast.success('Correct Answer !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }else {
            toast.error('Wrong Answer !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    return (
        <div className="quiz">
            <div className="question">
                <h3>{question}</h3>
            </div>
            <div className="radio-inputs">
                <label>
                    <div className="single-radio-input">
                        <input type="radio" value={options[0]} name="choices" onChange={onOptionChange} /> {options[0]}
                    </div>
                </label>
                <label>
                    <div className="single-radio-input">
                        <input type="radio" value={options[1]} name="choices" onChange={onOptionChange} /> {options[1]}
                    </div>
                </label>
                <label>
                    <div className="single-radio-input">
                        <input type="radio" value={options[2]} name="choices" onChange={onOptionChange}/> {options[2]}
                    </div>
                </label>
                <label>
                    <div className="single-radio-input">
                        <input type="radio" value={options[3]} name="choices" onChange={onOptionChange} /> {options[3]}
                    </div>
                </label>
                <ToastContainer autoClose = {1000} />
            </div>
        </div>
    )
}