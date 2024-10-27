// MilestoneSection.js
import React from 'react';
import './MilestoneSection.css'; // Custom CSS for styling

const milestones = [
  { date: '10th February 2024', title: 'Topic Assessment', description: 'The purpose of topic evaluation is to determine the viability of the subjects chosen by the pupils. Topics may be accepted with minor and significant suggestions at this stage, or they may be rejected.' },
  { date: 'March 2024', title: 'Project Charter', description: 'Define the project’s scope, objectives, and the primary stakeholders for approval.' },
  { date: 'April 2024', title: 'Project Proposal', description: 'The proposal outlines the plan for developing the project for funding or approval.' },
  { date: 'May 2024', title: 'Progress Presentation I', description: 'Present the current status, revealing any gaps or inconsistencies.' },
  { date: 'June 2024', title: 'Research Paper', description: 'Details the contributions to the research field and describes the project methodology.' },
  { date: 'July 2024', title: 'Progress Presentation II', description: 'A follow-up presentation to show progress and results.' },
  { date: 'August 2024', title: 'Website Assessment', description: 'The website is assessed for final submission and presentation.' },
  { date: 'September 2024', title: 'Final Report', description: 'Submission of the final project report covering all phases.' },
  { date: 'October 2024', title: 'Final Presentation & Viva', description: 'The final presentation and viva session to defend the project.' },
];

const MilestoneSection = () => {
  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Milestones</h2>
      <div className="timeline">
        {milestones.map((milestone, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="timeline-content">
              <h3 className="milestone-title">{milestone.title}</h3>
              <p className="milestone-description">{milestone.description}</p>
              <span className="milestone-date">{milestone.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilestoneSection;
