import React from "react";

const ProgressBar = ({ current, total }) => {
    const progress = (current / total) * 100;

    return (
        <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
            <div
                className="bg-green-500 h-4 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
            ></div>
            <p className="text-sm text-center mt-2">
                Question {current} of {total}
            </p>
        </div>
    );
};

export default ProgressBar;
