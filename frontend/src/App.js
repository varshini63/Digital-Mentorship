import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SideNav from './components/SideNav';
import Dashboard from './components/Dashboard';
import Material from './components/Material';
import VirtualLab from './components/VirtualLab';
import Practical from './components/Practical';
import Quiz from './components/Quiz';
import Summarize from './components/Summarize';
import Doubts from './components/Doubts';
import StoryGenerator from './components/StoryGenerator'; // Import the new StoryGenerator component
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import './App.css';

// Education layout component with SideNav
const EducationLayout = ({ children }) => (
  <div className="education-layout">
    <SideNav />
    <div className="main-content with-sidenav">
      {children}
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation Bar */}
        <Navbar />
        
        <Routes>
          {/* Home page route without SideNav */}
          <Route path="/" element={<Home />} />
          
          {/* Education routes - all with SideNav */}
          <Route path="/education" element={
            <EducationLayout>
              <Profile />
            </EducationLayout>
          } />
          
          {/* Profile route using the actual Profile component */}
          <Route path="/profile" element={
            <EducationLayout>
              <Profile />
            </EducationLayout>
          } />
          
          <Route path="/dashboard" element={
            <EducationLayout>
              <Dashboard />
            </EducationLayout>
          } />
          <Route path="/material" element={
            <EducationLayout>
              <Material />
            </EducationLayout>
          } />
          <Route path="/virtual-lab" element={
            <EducationLayout>
              <DndProvider backend={HTML5Backend}>
                <VirtualLab />
              </DndProvider>
            </EducationLayout>
          } />
          <Route path="/practical" element={
            <EducationLayout>
              <Practical />
            </EducationLayout>
          } />
          <Route path="/quiz" element={
            <EducationLayout>
              <Quiz />
            </EducationLayout>
          } />
          <Route path="/summarize" element={
            <EducationLayout>
              <Summarize />
            </EducationLayout>
          } />
          <Route path="/doubts" element={
            <EducationLayout>
              <Doubts />
            </EducationLayout>
          } />
          {/* New Story Generator route */}
          <Route path="/story-generator" element={
            <EducationLayout>
              <StoryGenerator />
            </EducationLayout>
          } />
          
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;