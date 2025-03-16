import React from "react";
import { useSpring, animated } from "react-spring";

const NumbersCounter = ({ n }) => {

  const radius = 80; 
  const circumference = 2 * Math.PI * radius; 

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: n },
    delay: 500,
    config: { mass: 1, tension: 20, friction: 11 },
  });

  return (
    <div className="relative w-1/3 h-1/3 flex items-center justify-center">
      <svg className="absolute" width="200" height="200" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="transparent"
          stroke="#e5e7eb"
          strokeWidth="12"
        />
        <animated.circle
          cx="100"
          cy="100"
          r={radius}
          fill="transparent"
          stroke="#44E14A"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={number.to(
            (val) => circumference - (val / 100) * circumference
          )}
          strokeLinecap="round"
          transform="rotate(-90 100 100)" // Start from the top
        />
      </svg>

      <animated.div className="text-5xl font-bold text-[#44E14A]">
        {number.to((val) => `${Math.round(val)}%`)}
      </animated.div>
    </div>
  );
};

export default NumbersCounter;
