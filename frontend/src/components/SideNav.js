import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SideNav.css';

function SideNav({ user }) {
  const location = useLocation();
  
  return (
    <div className="sidenav">
      <div className="nav-items">
        {/* Updated Profile link */}
        <Link 
          to={`/profile`} 
          className={`nav-item ${location.pathname === `/profile` ? 'active' : ''}`}
        >
          Profile
        </Link>
        <Link 
          to="/material" 
          className={`nav-item ${location.pathname === '/material' ? 'active' : ''}`}
        >
          Material
        </Link>
        <Link 
          to="/virtual-lab" 
          className={`nav-item ${location.pathname === '/virtual-lab' ? 'active' : ''}`}
        >
          Digital Lab
        </Link>
        <Link 
          to="/practical" 
          className={`nav-item ${location.pathname === '/practical' ? 'active' : ''}`}
        >
          Theory
        </Link>
        <Link 
          to="/quiz" 
          className={`nav-item ${location.pathname === '/quiz' ? 'active' : ''}`}
        >
          Quiz
        </Link>
        <Link 
          to="/summarize" 
          className={`nav-item ${location.pathname === '/summarize' ? 'active' : ''}`}
        >
          Summarize
        </Link>
        <Link 
          to="/doubts" 
          className={`nav-item ${location.pathname === '/doubts' ? 'active' : ''}`}
        >
          Doubts
        </Link>
        {/* New Story Generator link */}
        <Link 
          to="/story-generator" 
          className={`nav-item ${location.pathname === '/story-generator' ? 'active' : ''}`}
        >
          Story Generator
        </Link>
      </div>
    </div>
  );
}

export default SideNav;