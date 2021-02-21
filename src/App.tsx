import React from 'react';
import './App.css';
import Users from './Components/Users/Users';
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/Nav';
import { Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
        <Route path='/users'
          render={() => <Users />} />
    </div>
  );
}

export default App;
