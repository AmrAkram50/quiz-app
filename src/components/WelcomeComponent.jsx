import React, { useContext } from "react";
import QuizImg from "../assets/QuizImg.png";
import { AppContext } from "../AppContext";

const WelcomeComponent = () => {

  const {setComponentsIndex} = useContext(AppContext);

  return (
    <div className="w-[95%] md:w-5/6 h-full p-4 bg-white rounded-3xl flex flex-col items-center justify-center shadow-xl border-2 border-gray-400">
      <h1 className="font-bold text-[35px] lg:text-[40px] text-[#5BCE5B] mb-4 text-center">
        Welcome to your Quiz App
      </h1>

      <p className="text-md lg:text-lg text-gray-600 text-center max-w-xl leading-relaxed">
        Challenge yourself and test your knowledge across a variety of topics.
        Get ready to learn and have fun while answering exciting quiz questions!
      </p>

      <div className="flex items-center justify-center">
        <img src={QuizImg} alt="Quiz Image" className="w-3/4" />
      </div>

      <button onClick={() => setComponentsIndex(1)} className="bg-[#5BCE5B] text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-[#36b53c] transition duration-500">
        Start Quiz
      </button>
    </div>
  );
};

export default WelcomeComponent;
