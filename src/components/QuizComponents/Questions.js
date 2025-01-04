import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { db } from '../../utils/firebase';
import "./Questions.css";

function Questions() {
    const [questions, setQuestion] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);


    useEffect(() => {
        const getPostsFromFirebase = [];
        const subscriber = db
            .collection("questions")
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    getPostsFromFirebase.push({
                        ...doc.data(), //spread operator
                        key: doc.id, // `id` given to us by Firebase
                    });
                });
                setQuestion(getPostsFromFirebase);
                setLoading(false);
            });

        // return cleanup function
        return () => subscriber();
    }, [loading]);

    if (loading) {
        return <h1>loading firebase data...</h1>;
    }

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className='question__page'>
            <motion.div>
                <div className='questions'>
                    {showScore ? (
                        <div className='score__section'>
                            You scored {score} out of {questions.length}
                            <Link to="/"><button className="button-style">Home page</button></Link>
                        </div>
                    ) : (
                        <>
                            <div className='question__section'>
                                <div className='question__text'>{questions[currentQuestion].questionText}</div>
                            </div>
                            <div className='answer__section'>

                                {questions[currentQuestion].answerOptions.map((answerOption) => (

                                    <button className="question__btn" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}><span className="answer__prefix">{answerOption.answerPrefix}</span>{answerOption.answerText}</button>

                                ))}

                            </div>
                        </>
                    )}
                </div>
            </motion.div>
        </div>

    )
}

export default Questions