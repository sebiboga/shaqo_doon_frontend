import React from 'react';
import './App.css';

import { Switch, Route } from "react-router-dom";

import Header from './components/Header';
// import Menu from './components/Menu';
import Welcome from './pages/Welcome';
import Jobs from './pages/Jobs';
import Companies from './pages/Companies';
import Error404 from './pages/Error404';
import Footer from './components/Footer';

const App = () => {

  return (
    <div className="App">
      <Header />
      {/* <Menu /> */}
      <Switch>
        <Route exact path='/' render={() => <Welcome />} />
        <Route exact path='/locuri-de-munca/' render={() => <Jobs />} />
        <Route exact path='/locuri-de-munca/:company' render={() => <Jobs />} />
        <Route exact path='/companii' render={() => <Companies />} />
        <Route path='*' render={() => <Error404 />} />
      </Switch>
      <Footer />
    </div>
  );
}



export default App;
