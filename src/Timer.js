import React from "react";
import "./Timer.css";
import "csshake";

const max = number => Math.max(parseInt(number, 10), 0);
const format = number => (number < 10 ? `0${number}` : number);

const Number = ({ children }) =>
  <span className="Timer-number">
    {children}
  </span>;

const getClassName = diff => {
  if (diff < 450) return "shake shake-opacity shake-constant";
  if (diff < 900) return "shake shake-slow shake-constant";
  if (diff < 1800) return "shake shake-little shake-constant";
  return "";
};

const Timer = ({
  hours,
  minutes,
  victory,
  seconds,
  diff,
  children,
  className
}) => {
  // 1800 -> start shaking
  // 900 -> start shaking more
  // 450 -> shake all crazy
  return (
    <div className={`Timer-container ${className}`}>
      <p className={!victory && getClassName(diff)}>
        <Number>{format(max(hours))}</Number>
        :
        <Number>{format(max(minutes))}</Number>
        :
        <Number>{format(max(seconds))}</Number>
      </p>
      {children}
    </div>
  );
};

export default Timer;
