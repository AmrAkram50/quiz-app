import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import NumbersCounter from './NumberCounter';

const FinishComponent = () => {
    const { score, setScore, setComponentsIndex } = useContext(AppContext);
    const scorePercentage = (score * 100 / 6).toFixed(0);

    const getGreetingMessage = () => {
        if (scorePercentage == 100) return "🏆 Perfect Score! You're a genius!";
        if (scorePercentage >= 80) return "🎉 Great Job! You did amazing!";
        if (scorePercentage >= 50) return "👍 Good Work! Keep improving!";
        return "💪 Don't Give Up! Try again to improve!";
    };

    const handleWindowClose = () => {
        window.alert('Thanks for having this quiz!!');
    }

    const handleTryAgain = () => {
        setScore(0);
        setComponentsIndex(0);
    }

    return (
        <div className="w-5/6 h-full p-4 m-4 bg-white gap-y-8 rounded-3xl flex flex-col items-center justify-center shadow-xl border-2 border-gray-400">
            <div className="text-3xl md:text-4xl font-bold text-[#5BCE5B]">Congratulations!</div>
            <div className="text-md md:text-xl font-medium text-gray-700">{getGreetingMessage()}</div>
            <NumbersCounter n={Number.parseInt(scorePercentage)} />
            <div className="text-lg text-gray-500">Your score: {score}/6</div>
            <div className='flex gap-4 lg:gap-0 lg:w-1/3 justify-between items-center'>
                <button onClick={handleTryAgain} className='p-4 text-md md:text-lg md:w-[140px] font-semibold rounded-lg border-2 border-[#5BCE5B] hover:bg-[#5BCE5B] hover:text-white transition-all duration-500'>Try Again</button>
                <button onClick={handleWindowClose} className='p-4 text-md md:text-lg text-white md:w-[140px] font-semibold rounded-lg border-2 border-red-500 bg-red-500 hover:bg-red-400 transition-all duration-500'>Exit</button>
            </div>
        </div>
    );
};

export default FinishComponent;
