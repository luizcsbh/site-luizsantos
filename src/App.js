import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header.js';

function App() {
  return (
    <Router>
      <Header/>
    </Router>
  );
}

export default App;
