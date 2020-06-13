import React from 'react';
import './App.css';
import auth0Client from './Auth';
import { Route } from 'react-router';
import Callback from './Callback';
import NavBar from './NavBar';

const App = (props: any) => {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  };

  return (
    <div className="App">
      <NavBar />
      {111111111111}
      {auth0Client.getIdToken()}
      <Route exact path='/callback' component={Callback}/>
    </div>
  );
};

export default App;
