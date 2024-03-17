"use client";
import React from "react";

const Button = () => {
  return (
    <div>
      <button
        className="bg-blue-800 px-4 py-2 rounded-lg text-white"
        onClick={() => console.log("i have clicked here !")}
      >
        click here
      </button>
    </div>
  );
};

export default Button;
