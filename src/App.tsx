import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Components/Users/Users';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Users/>
    </div>
  );
}

export default App;
