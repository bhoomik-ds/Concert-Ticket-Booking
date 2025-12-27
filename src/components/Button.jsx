import React from "react";

const Button = ({ children, className, disabled }) => {
  const handleClick = () => {
    if (disabled) return;
    window.location.href = "https://razorpay.me/@bhoomikramanikbhaisorathiya";
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md font-semibold transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
