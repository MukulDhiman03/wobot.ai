import React from "react";

const CircularChip = ({ letter, percentage = 70, color = "red" }) => {
  const borderWidth = 2;
  const size = 25;
  const radius = (size - borderWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference * (1 - (percentage || 0) / 100); // Default 0% if undefined

  return (
    <div
      style={{
        position: "relative",
        width: `${size}px`,
        height: `${size}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "0.8em",
        fontWeight: "bold",
      }}
    >
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={borderWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeOffset}
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          color: "black",
        }}
      >
        {letter}
      </div>
    </div>
  );
};

export default CircularChip;
