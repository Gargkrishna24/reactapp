import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


function App() {
  return (
    <div className="container">
      <div className="left-panel">
        <h2>Contents</h2>
        <ul>
          <li>Introduction</li>
          <li>1. Introduction to Microservices</li>
          <li>2. Hands on: Creating Microservices with ASP.net Core</li>
          <li>3. Hands on: Synchronous Communication between Microservices</li>
          <li>4. Microservices and DevOps</li>
          <li>5. Microservices Containerisation with Docker</li>
          <li>6. Microservices Deployment</li>
          <li>Conclusion</li>
        </ul>
      </div>
      <div className="right-panel">
        <div className="header">
          <h2>ASP Micriservices with .NET Core for Developers</h2>
          <h3>Communication between microservices</h3>
          <span className="icon"><i className="fas fa-thumbs-up"></i></span>
          <span className="icon"><i className="fas fa-bookmark"></i></span>
        </div>
        <div className="video-section">
          <img src="https://images.unsplash.com/photo-1561988192-98381c189611?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80" alt="Norway" />
          <div className="video-details">
            <h3>Norway AMAZING - Horizon View bath with Beautiful nature - 4k VideoHD</h3>
            <div className="video-actions">
              <span className="icon"><i className="fas fa-clock"></i> Watch later</span>
              <span className="icon"><i className="fas fa-share-alt"></i> Share</span>
            </div>
          </div>
          <div className="watch-button">
            <span>Watch on</span>
            <span className="icon"><i className="fab fa-youtube"></i></span>
          </div>
        </div>
        <div className="nav-buttons">
          <button className="button"><i className="fas fa-video"></i> Overview</button>
          <button className="button"><i className="fas fa-comment-dots"></i> QnA</button>
          <button className="button"><i className="fas fa-book-open"></i> Notebook</button>
          <button className="button"><i className="fas fa-list-ul"></i> Transcript</button>
        </div>
        <div className="instructor-section">
          <h3>Instructor</h3>
          <div className="instructor-info">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="Rodrigo Diaz" />
            <div>
              <h4>Rodrigo Diaz</h4>
              <p>Solution Architect, Lorem, Ipsum, enginer Analyst, Programmer, worker</p>
            </div>
          </div>
        </div>
        <div className="related-course-section">
          <h3>Related to Course</h3>
          <div className="related-course-info">
            <div className="course-item">
              <span className="icon"><i className="fas fa-users"></i></span>
              <h4>Classroom</h4>
              <span>show all</span>
            </div>
            <div className="course-item">
              <span className="icon"><i className="fas fa-file-alt"></i></span>
              <h4>Class Files</h4>
              <span>show all</span>
            </div>
            <div className="course-item">
              <span className="icon"><i className="fas fa-certificate"></i></span>
              <h4>Certificates</h4>
              <span>show all</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
