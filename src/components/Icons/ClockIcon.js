import React from "react";

const ClockIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <circle cx="24.5" cy="24.5" r="19" fill="white" stroke="black"></circle>
      <path d="M24 12.5V25.5L30 31.5" stroke="black"></path>
    </svg>
  );
};

export default ClockIcon;
