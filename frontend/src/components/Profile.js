import React from 'react';
import './Profile.css';

function Profile() {
  // Static profile data as requested
  const studentProfile = {
    name: "Anjali Patel",
    age: 14,
    standard: "8th",
    medium: "English",
    syllabus: "State Syllabus",
    schoolName: "Government High School, Miyapur",
    place: "Hyderabad, Telangana"
  };

  return (
    <div className="profile-container">
      <h2 className="section-title">Student Profile</h2>
      
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <span>{studentProfile.name.charAt(0)}</span>
          </div>
          <h3>{studentProfile.name}</h3>
        </div>
        
        <div className="profile-details">
          <div className="profile-detail-item">
            <span className="detail-label">Age</span>
            <span className="detail-value">{studentProfile.age} years</span>
          </div>
          
          <div className="profile-detail-item">
            <span className="detail-label">Standard</span>
            <span className="detail-value">{studentProfile.standard}</span>
          </div>
          
          <div className="profile-detail-item">
            <span className="detail-label">Medium</span>
            <span className="detail-value">{studentProfile.medium}</span>
          </div>
          
          <div className="profile-detail-item">
            <span className="detail-label">Syllabus</span>
            <span className="detail-value">{studentProfile.syllabus}</span>
          </div>
          
          <div className="profile-detail-item">
            <span className="detail-label">School Name</span>
            <span className="detail-value">{studentProfile.schoolName}</span>
          </div>
          
          <div className="profile-detail-item">
            <span className="detail-label">Place</span>
            <span className="detail-value">{studentProfile.place}</span>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Profile;