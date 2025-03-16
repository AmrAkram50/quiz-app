import React from "react";
import { useSpring, animated } from "react-spring";

const NumbersCounter = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: n },
    delay: 500,
    config: { mass: 1, tension: 20, friction: 11 },
  });

  const radius = 90;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative flex items-center justify-center w-52 h-5w-52">
      <svg width="100%" height="100%" viewBox="0 0 200 200">
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
          stroke="#5BCE5B"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={number.to(
            (val) => circumference - (val / 100) * circumference
          )}
          strokeLinecap="round"
          transform="rotate(-90 100 100)" 
        />
      </svg>

      <animated.div className="absolute text-5xl font-bold text-[#5BCE5B]">
        {number.to((val) => `${Math.round(val)}%`)}
      </animated.div>
    </div>
  );
};

export default NumbersCounter;
