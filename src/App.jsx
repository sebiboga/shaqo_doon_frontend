import React from 'react';
import './App.css';

import { Switch, Route } from "react-router-dom";

import Header from './components/header/header.component';
import Welcome from './pages/welcome/welcome.component';
import Jobs from './pages/jobs/jobs.component';
import Companies from './pages/companies/companies.component';
import Error404 from './pages/error/error404.component';
import Footer from './components/footer/footer.component';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' render={() => <Welcome />} />
        <Route exact path='/locuri-de-munca/' render={() => <Jobs />} />
        <Route exact path='/companii' render={() => <Companies />} />
        <Route path='*' render={() => <Error404 />} />
      </Switch>
      <Footer />
    </div>
  );
}



export default App;
