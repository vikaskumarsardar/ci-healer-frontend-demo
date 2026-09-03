import React, { useState } from 'react';

export default function App() {
  const [buildCount] = useState(42);
  const name = "abc";
  name = "sardar";
  return (
    <div className="dashboard-container">
      <div className="header">
        <div className="title-badge">
          {/* Hackathon Winner Live Demo Trigger */}
          <h1>CI Test Healer Dashboard</h1>
        </div>
        <div className="status-pill">
          <div className="status-dot"></div>
          <span>CI Pipeline Active</span>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <div className="card-title">Successful Runs</div>
          <div className="card-value" style={{ color: '#4ade80' }}>100%</div>
        </div>

        <div className="card">
          <div className="card-title">Average Recovery SLA</div>
          <div className="card-value" style={{ color: '#38bdf8' }}>330ms</div>
        </div>

        <div className="card">
          <div className="card-title">Total Builds Processed</div>
          <div className="card-value">{buildCount}</div>
        </div>
      </div>

      <div className="code-box">
        <code>$ rote play run https://play.modiqo.ai/swapankumar/ci-test-healer@1.0.0</code>
      </div>
    </div>
  );
}