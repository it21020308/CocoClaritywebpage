// Overview.js
import React from 'react';
import './Overview.css'; // Custom CSS for styling
import intro from '../assets/introimage.jpg'; 

const Overview = () => {
  return (
    <div className="overview-container" id="overview">
      <div className="overview-text">
        <h2>
        Sustainable and Efficient Coconut Oil Industry in Sri Lanka
        </h2>
        <p>
        Sri Lanka, known for its lush coconut plantations, ranks as the 4th largest producer of coconuts and the 7th largest producer of coconut oil globally. The coconut oil industry plays a significant role in the nation's economy, offering various products ranging from refined oil to virgin coconut oil. However, with the rise of global demand and dynamic market conditions, it is essential to adopt innovative methods to boost productivity, sustainability, and efficiency in this sector.
        </p>
        <p>
        The rapid evolution of Artificial Intelligence (AI) and Machine Learning (ML) provides new opportunities for transformation across industries, including agriculture and manufacturing. Applying these technologies can enhance the coconut oil industry by optimizing production, forecasting market demands, and ensuring product quality. Additionally, these technologies can empower manufacturers to make data-driven decisions about product types and target markets, supporting better strategic planning and export potential.
        </p>
        <p>
        This research focuses on exploring how AI/ML tools can be effectively implemented to address key challenges and unlock new possibilities for the Sri Lankan coconut oil industry. Specifically, it seeks to develop insights into future demand predictions based on past trends, introduce rapid quality testing systems via smartphones, and offer targeted marketing strategies for exports. The findings aim to help manufacturers improve efficiency, enhance product quality, and align their operations with global market needs while fostering sustainable growth.
        </p>
      </div>
      <div className="overview-image">
      <img src={intro} alt="Intro"  />
      </div>
    </div>
  );
};

export default Overview;
