import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to TFI Digital Mentorship Platform</h1>
          <p>Empowering students through mentorship, resources, and digital learning</p>
          <Link to="/education" className="cta-button">Get Started</Link>
        </div>
      </div>
      
      <div className="features-section">
        <h2>Our Platform Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-book"></i>
            <h3>Learning Materials</h3>
            <p>Access quality educational resources for all grades and subjects</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-flask"></i>
            <h3>Digital Lab</h3>
            <p>Watch educational videos to enhance your understanding of topics</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-chalkboard-teacher"></i>
            <h3>Interactive Theory</h3>
            <p>Explore subject theory explained in an easy-to-understand manner</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-question-circle"></i>
            <h3>Assessments</h3>
            <p>Test your knowledge with quizzes and improve your learning</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-compress-alt"></i>
            <h3>Content Summarization</h3>
            <p>Get concise summaries of complex topics and lengthy materials</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-question"></i>
            <h3>Doubt Resolution</h3>
            <p>Get your academic doubts resolved with AI-powered assistance</p>
          </div>
        </div>
      </div>
      
      <div className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>Teach For India (TFI) is committed to providing quality education to underprivileged students across the country. Through this digital platform, we aim to bridge the gap between students and mentors, making quality education accessible to all.</p>
          <p>Our vision is to create a world where every child receives an excellent education, regardless of their background or circumstances.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;