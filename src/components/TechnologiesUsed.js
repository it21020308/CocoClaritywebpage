// TechnologiesUsed.js
import React from 'react';
import './Technologies.css'; // Import the custom CSS

// Import your technology logos
import reactjs from '../assets/reactnative.png';
import python from '../assets/python.png';
import ml from '../assets/ml.jpg';
import mui from '../assets/mongodb.png';
import firebase from '../assets/github.png';
import iot from '../assets/nodejs.png';

const technologies = [
  { name: 'React JS', logo: reactjs },
  { name: 'Python', logo: python },
  { name: 'Machine Learning', logo: ml },
  { name: 'MUI Framework', logo: mui },
  { name: 'Firebase', logo: firebase },
  { name: 'IoT', logo: iot }
];

const TechnologiesUsed = () => {
  return (
    <div className="technologies-section">
      <h2>Technologies</h2>
      <div className="technologies-grid">
        {technologies.map((tech, index) => (
          <div key={index} className="technology-item">
            <img src={tech.logo} alt={tech.name} className="tech-logo" />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesUsed;
