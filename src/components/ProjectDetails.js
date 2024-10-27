// ProjectDetails.js
import React from 'react';
import './ProjectDetails.css'; // Import CSS for styling

const details = [
  {
    title: 'Literature Survey',
    description: (
      <>
        <p>
        The literature survey emphasizes that while numerous studies exist on coconut oil production and market dynamics, most focus on traditional practices and human decision-making processes.
         Key gaps include limited research on advanced predictive models, particularly within the context of Sri Lanka's coconut oil industry.
        Studies have explored supply-demand forecasting models, quality prediction, and crop yield estimation, but few integrate machine learning techniques.
        Additionally, existing research overlooks factors like geopolitical trends, climatic changes, and inflation.
        This research aims to address these limitations by introducing AI-driven predictive tools that can enhance productivity, quality control, and forecasting in the coconut oil industry.
        </p>

      </>
    ),
  },
  {
    title: 'Proposed Problem',
    description: (
      <>
        <p>
        The main problem addressed by this research is the inefficiency and sustainability challenges faced by Sri Lanka's coconut oil industry. 
        Current operations rely heavily on manual processes, which introduce inefficiencies and subjectivity, hindering productivity and international competitiveness.
         Additionally, a lack of advanced forecasting tools limits the industry’s ability to predict demand accurately, optimize exports, and manage copra quality efficiently.
         There is a pressing need to integrate modern AI/ML technologies to automate decision-making processes, enhance production efficiency, and support market expansion through data-driven insights.
        </p>
      </>
    ),
  },
  {
    title: 'Proposed Solution',
    description: (
      <>
        <p>
        This research proposes the development of a web application that leverages machine learning algorithms and predictive models to enhance the coconut oil industry’s efficiency and sustainability. 
        The solution focuses on several core areas: 1) Predicting demand for coconut oil using historical and economic data; 2) Assessing copra and oil quality through a fast, smartphone-compatible prediction system; 3) Offering manufacturers insights into optimal oil production and product types; 4) Identifying the most profitable export destinations using advanced data analysis. 
        This application will streamline production, enhance export potential, and support small-scale farmers by removing inefficiencies.
        </p>
      </>
    ),
  },
  {
    title: 'Main Objective',
    description: (
      <>
        <p>
        The primary objective of this research is to improve the sustainability and efficiency of large-scale coconut oil manufacturing in Sri Lanka through the use of advanced technologies. 
        Specific goals include developing predictive models for accurate oil yield estimation, demand forecasting, and copra quality measurement. Additionally, the research aims to empower small-scale producers by providing them with tools to enhance profitability and gain direct market access, reducing their reliance on intermediaries. 
        The web application aims to transform the industry by optimizing production processes and providing real-time data insights.
        </p>
      </>
    ),
  },
  {
    title: 'Methodology',
    description: (
      <>
        <p>
        The research follows a structured methodology, starting with extensive data collection from coconut farms, production facilities, and economic sources. Historical production, export, and market data are processed to train predictive models. 
        The methodology involves building and testing machine learning algorithms, such as convolutional neural networks (CNNs) for copra quality prediction and random forest models for demand forecasting. 
        An iterative development approach ensures continuous model improvement. The final models are integrated into a user-friendly web application that supports decision-making and streamlines production processes. 
        Ongoing monitoring and maintenance will ensure the system adapts to changing market conditions.
        </p>
      </>
    ),
  },
  {
    title: 'Research Gap',
    description: (
      <>
        <p>
        The research identifies several key gaps in existing studies: limited focus on the Sri Lankan coconut oil market, lack of advanced predictive tools for production optimization, and minimal research on integrating external economic factors into forecasting models. Additionally, there is a lack of real-time quality assessment systems that are accessible via smartphones, which could streamline quality control.
         Furthermore, existing studies fail to explore optimal distribution strategies for maximizing profits in international markets.
          This research aims to bridge these gaps by introducing AI-driven predictive models tailored to the specific needs of the Sri Lankan coconut oil industry.
        </p>
      </>
    ),
  },
];

const ProjectDetails = () => {
  return (
    <div className="details-container">
      {details.map((detail, index) => (
        <div key={index} className="detail-card">
          <h3>{detail.title}</h3>
          {detail.description}
        </div>
      ))}
    </div>
  );
};

export default ProjectDetails;
