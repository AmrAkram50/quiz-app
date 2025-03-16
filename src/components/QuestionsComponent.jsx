import React, { useState, useContext } from 'react'
import { questions } from '../data/QuestionsAndAnswers.js'
import { AppContext } from '../AppContext.jsx';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import ProgressBar from './ProgressBar.jsx';

const QuestionsComponent = () => {

    const { score, setScore, setComponentsIndex } = useContext(AppContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');

    const handleSelectAnswer = (e) => {
        setSelectedAnswer(e.target.value)
    }

    const handleAnswerSubmit = () => {
        if (selectedAnswer === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer('');
        }
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer('');
        } else {
            setComponentsIndex(3);
            setSelectedAnswer('');
        }
    };

    return (
        <div className="w-5/6 h-full p-4 bg-white gap-y-5 md:gap-y-2 rounded-3xl flex flex-col items-center justify-start shadow-xl border-2 border-gray-400">
            
            <ProgressBar current={currentQuestion + 1} total={questions.length} />

            <h2 className="text-xl md:text-2xl font-semibold md:my-1">{questions[currentQuestion].question}</h2>

            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedAnswer}
                    onChange={handleSelectAnswer}
                    className='gap-y-2 mt-6'
                >
                    {questions[currentQuestion].answers.map((answer, index) => (
                        <div className={`px-4 py-2 border-2 border-gray-400 rounded-2xl`}>
                            <FormControlLabel value={index} control={<Radio />} label={answer} />
                        </div>
                    ))}

                </RadioGroup>
            </FormControl>
            
            <div className='w-full h-full flex items-end justify-end px-12'>
            <button disabled={selectedAnswer === '' ? true : false} className="bg-[#44E14A] m-4 text-white px-4 md:px-6 py-3 rounded-xl text-lg font-semibold hover:bg-[#36b53c] transition duration-500" onClick={handleAnswerSubmit}>Submit answer</button>
            </div>
        </div>
    )
}

export default QuestionsComponent
