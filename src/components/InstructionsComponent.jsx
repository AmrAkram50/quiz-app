import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const InstructionsComponent = () => {

    const {setComponentsIndex} = useContext(AppContext);

  return (
    <div className="w-5/6 h-full p-8 m-4 bg-white rounded-3xl flex flex-col items-center justify-center shadow-xl border-2 border-gray-400">

      <h2 className="font-bold text-[35px] lg:text-[50px] text-[#44E14A] mb-6 text-center">
        Quiz Instructions
      </h2>

      <ul className="text-md lg:text-lg text-gray-600 mb-8 max-w-2xl space-y-4 leading-relaxed list-disc list-inside">
        <li>The quiz is time limited, pay attention to the timer.</li>
        <li>Read each question carefully before choosing your answer.</li>
        <li>You cannot go back to previous questions once answered.</li>
        <li>Each correct answer earns you points—aim for a high score!</li>
        <li>Ensure a stable internet connection for a smooth experience.</li>
      </ul>

      <p className="text-md text-red-500 mb-8 text-center font-semibold">
        ⚠️ Once you start the quiz, you cannot pause or restart!
      </p>

      <button onClick={() => setComponentsIndex(2)} className="bg-[#44E14A] text-white px-6 py-3 rounded-xl text-md lg:text-lg font-semibold hover:bg-[#36b53c] transition duration-300">
        I Understand, Start Quiz
      </button>
    </div>
  );
};

export default InstructionsComponent;
