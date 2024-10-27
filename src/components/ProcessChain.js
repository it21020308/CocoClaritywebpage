// ProcessChain.js
import React, { useState } from "react";
import "./ProcessChain.css";
import process1 from "../assets/process-1.jpg";
import process2 from "../assets/process-2.jpg";
import process3 from "../assets/process-3.jpg";
import process4 from "../assets/process-4.jpg";
import process5 from "../assets/process-5.jpg";
import process6 from "../assets/process-6.jpg";
import process7 from "../assets/process-7.jpg";
import process8 from "../assets/process-8.jpg";
import process9 from "../assets/process-9.jpg";
import process10 from "../assets/process-10.jpg";
import process11 from "../assets/process-11.jpg";

const steps = [
  { id: 1, name: "Estate Selection", description: "Carefully vetting and identifying our plantations...", img: process1 },
  { id: 2, name: "Dehusking", description: "Patiently waiting and removing the husks...", img: process2 },
  { id: 3, name: "Sorting", description: "Calmly identifying and sorting our coconuts...", img: process3 },
  { id: 4, name: "Deshelling", description: "Expertly holding and deshelling the shells...", img: process4 },
  { id: 5, name: "Peeling", description: "Gently holding and peeling the testa...", img: process5 },
  { id: 6, name: "Crushing & Cutting", description: "Immediately crushing and cutting the coconut kernel...", img: process6 },
  { id: 7, name: "Drying", description: "Correctly drying and reducing the moisture...", img: process7 },
  { id: 8, name: "Expelling", description: "Neatly expelling and separating the oil...", img: process8 },
  { id: 9, name: "Filtration", description: "Carefully filtering and removing all sediments...", img: process9 },
  { id: 10, name: "Storage", description: "Neatly storing the coconut oil...", img: process10 },
  { id: 11, name: "Filling & Bottling", description: "Passionately bottling and pasting the labels...", img: process11 },
];

const ProcessChain = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const handleMouseEnter = (step) => setHoveredStep(step);
  const handleMouseLeave = () => setHoveredStep(null);

  return (
    <div className="circular-process-container">
      <h2>Coconut Oil Manufacturing Process</h2>
      <div className="circular-process">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`process-step step-${index + 1}`}
            onMouseEnter={() => handleMouseEnter(step)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={step.img} alt={step.name} className="step-image" />
            {hoveredStep === step && (
              <div className="popup">
                <h4>{step.name}</h4>
                <p>{step.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessChain;
