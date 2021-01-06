import React from 'react';
import './App.css';

import { Switch, Route, Link } from "react-router-dom";

import Menu from './components/Menu';
import Welcome from './pages/Welcome';
import AllJobs from './pages/AllJobs';
import Companies from './pages/Companies';
import Error404 from './pages/Error404';

const App = () => {

  return (
    <div className="App">
      <Link to='/'>
        <h1>Shaqo</h1>
      </Link>
      <Menu />
      <Switch>
        <Route exact path='/' render={() => <Welcome />} />
        <Route exact path='/jobs/' render={() => <AllJobs />} />
        <Route exact path='/companies' render={() => <Companies />} />
        <Route path='*' render={() => <Error404 />} />
      </Switch>
    </div>
  );
}



export default App;
