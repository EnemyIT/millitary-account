import React from 'react';
import Sidebar from './components/Sidebar';
import './components/dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
        <h1>Головна сторінка А0707</h1>
        <hr />
        <div className="dashboard-grid">
          <div className="dashboard-item">
            <h3>Всього о/с</h3>
            <p className="name">John</p>
          </div>
          <div className="dashboard-item">
            <h3>Хворі</h3>
            <p className="name">Jane</p>
          </div>
          <div className="dashboard-item">
            <h3>Відпустка</h3>
            <p className="name">Bob</p>
          </div>
          <div className="dashboard-item">
            <h3>Відрядження</h3>
            <p className="name">Alice</p>
          </div>
        </div>
        <div className="chart-container">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="#fff" strokeWidth="20" fill="none" />
            <circle cx="50" cy="50" r="40" stroke="#4BC0C0" strokeWidth="20" strokeDasharray="251.2 251.2" fill="none" strokeLinecap="round" transform="rotate(-90, 50, 50)" />
          </svg>
          <div className="chart-data">
            <p>о/c</p>
            <p>хворі</p>
            <p>відпустка</p>
            <p>відрядження</p>
          </div>
        </div>
        <div className='dashboard2'>
          <div className='dashboard-roshod'>
            <div className='dashboard-item'>
              <h3>Розхід o/c</h3>
              <p>test</p>
            </div>
          </div>
          <div className='dashboard-texnika'>
            <div className='dashboard-item'>
              <h3>Розхід техніки</h3>
              <p>test</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
