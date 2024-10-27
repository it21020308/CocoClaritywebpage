import './App.css';
import Header from './components/Header';
import Overview from './components/Overview';
import ProjectDetails from './components/ProjectDetails';
//import Layout from './components/Layout';
//import LitreatureSurvey from './components/LitreatureSurvey';
import Navbar from './components/Navbar';
import ProcessChain from './components/ProcessChain';
//import researchData from './data/researchData';
//import ResearchProblem from './components/ResearchProblem';
import Methodologies from './components/Methodologies';
import TechnologiesUsed from './components/TechnologiesUsed';
import MilestoneSection from './components/MilestoneSection'; 
import Documents from './components/Documents';
import Team from './components/Team';
import ContactForm from './components/ContactForm';
//import Litreature from './components/Litreature';
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />

      <Overview />
      <ProjectDetails />

      <ProcessChain />
     
        <Methodologies />

      <div id="technologies-used">
        <TechnologiesUsed />
      </div>

      <MilestoneSection />

      <Documents />

      <div id="team">
        <Team />
      </div>

      <div id="contact-form">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}

export default App;
