// Team.js
import React from 'react';
import './Team.css'; // Import the CSS for styling

import supervisor from '../assets/supervisor.jpg';
import cosupervisor from '../assets/cosupervisor.jpg';
import externalsupervisor from '../assets/externalsupervisor.jpg';
import ashen from '../assets/Ashen.jpg';
import priyanwada from '../assets/Priyanwada.jpeg';
import sisini from '../assets/Sisini.png';
import maleesha from '../assets/Maleesha.jpg';

const teamMembers = [
  {
    name: 'MR. Nelum Amarasena​',
    title: 'Supervisor',
    institute: 'Sri Lanka Institute of Information Technology',
    department: 'Information Technology',
    image: supervisor,
    email: 'mailto:nelum.a@sliit.lk',
  },
  {
    name: 'MS. Manori Gamage​​',
    title: 'Co-Supervisor',
    institute: 'Sri Lanka Institute of Information Technology',
    department: 'Information Technology',
    image: cosupervisor,
    email: 'mailto:manori.g@sliit.lk',
  },
  {
    name: 'DR. Chandi Yalegama​​​',
    title: 'External Supervisor',
    institute: 'Coconut Processing Research Division',
    department: 'Sri Lanka Institute of Information Technology',
    image: externalsupervisor,
    email: 'mailto:example@gmail.com',
  },
  {
    name: 'W.P.A.M. Fernando',
    title: 'Undergraduate',
    institute: 'Sri Lanka Institute of Information Technology',
    department: 'Software Engineering',
    image: ashen,
    email: 'mailto:it21078378@my.sliit.lk',
  },
  {
    name: 'D.M.P.D.Weligama',
    title: 'Undergraduate',
    institute: 'Sri Lanka Institute of Information Technology',
    department: 'Information Technology',
    image: priyanwada,
    email: 'mailto:it21061066@my.sliit.lk',
  },
  {
    name: 'A.M.S.S.Bandara',
    title: 'Undergraduate',
    institute: 'Sri Lanka Institute of Information Technology',
    department: 'Information Technology',
    image: sisini,
    email: 'mailto:it21103322@my.sliit.lk',
  },
  {
    name: 'A.M.Dewmini',
    title: 'Undergraduate',
    institute: 'Sri Lanka Institute of Information Technology',
    department: 'Information Technology',
    image: maleesha,
    email: 'mailto:it21020308@my.sliit.lk',
  },
];

const Team = () => {
  return (
    <div className="team-container">
      <h2>Meet Our Team!</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p className="team-title">{member.title}</p>
            <p>{member.institute}</p>
            <p>{member.department}</p>
            <div className="team-links">
              <a href={member.email}>
                <i className="fas fa-envelope"></i> E-Mail
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
