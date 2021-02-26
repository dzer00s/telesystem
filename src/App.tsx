import './App.css';
import Users from './Components/Users/Users';
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/Nav';
import { Route } from 'react-router';
import MyPosts from './Components/Posts/MyPosts';
import Albums from './Components/Albums/Albums';
import Photos from './Components/Albums/Photos/Photos';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
        <Route path='/users'
          render={() => <Users />} />
        <Route path='/posts'
          render={() => <MyPosts />} />   
        <Route exact path='/albums'
          render={() => <Albums />} />  
        <Route path='/albums/:id'
         component={Photos} />
    </div>
  );
}

export default App;
