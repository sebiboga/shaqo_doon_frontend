import React from 'react';
import './App.css';

import { Switch, Route } from "react-router-dom";

import Header from './components/Header';
import Menu from './components/Menu';
import Welcome from './pages/Welcome';
import Jobs from './pages/Jobs';
import Companies from './pages/Companies';
import Error404 from './pages/Error404';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Menu />
      <Switch>
        <Route exact path='/' render={() => <Welcome />} />
        <Route exact path='/jobs/' render={() => <Jobs />} />
        <Route exact path='/jobs/:company' render={() => <Jobs />} />
        <Route exact path='/companies' render={() => <Companies />} />
        <Route path='*' render={() => <Error404 />} />
      </Switch>
    </div>
  );
}



export default App;
