// Methodologies.js
import React from 'react';
import './Methodologies.css'; // Import the CSS for styling

const methodologies = [
  {
    title: 'Supply and Demand Predictive Model',
    description: (
      <p>
        Build predictive models for forecasting export volumes. Use logistic 
        regression for price forecasting and random forest regression for optimal 
        export volume prediction, ensuring high accuracy in market forecasts.
      </p>
    ),
  },
  {
    title: 'Copra Quality Predictive Model',
    description: (
      <p>
        Use Convolutional Neural Networks (CNN) to classify copra quality in real-time. 
        Deployed via a mobile app, this solution offers instant feedback, enhancing 
        product quality control for producers.
      </p>
    ),
  },
  {
    title: 'Oil Product Estimator',
    description: (
      <p>
        This estimator uses machine learning to optimize oil production by predicting 
        input needs and yield. A decision tree model tracks and forecasts production 
        based on market demands and environmental conditions.
      </p>
    ),
  },
  {
    title: 'Coconut Oil Quality Predictive Model',
    description: (
      <p>
        Leverage hybrid models combining CNNs and decision trees to assess coconut oil 
        quality. This approach ensures high accuracy and helps streamline industrial 
        quality control processes.
      </p>
    ),
  },
];

const Methodologies = () => {
  return (
    <div className="methodologies-section">
      <h2 className="section-title">OUR KEY FEATURES</h2>
      <p className="section-subtitle">
        Smart Forecasting Solutions to Optimize Coconut Oil Production and Export Strategies
      </p>
      <div className="methodologies-container">
        {methodologies.map((methodology, index) => (
          <div key={index} className="methodology-card">
            <h3>{methodology.title}</h3>
            {methodology.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Methodologies;
