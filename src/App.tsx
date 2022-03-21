import React from 'react';
import Home from 'src/app/pages/Home';
import Header from 'src/app/components/Header';
import Curiosity from 'src/app/pages/Curiosity';
import About from 'src/app/pages/About';
import AddNewUser from 'src/app/pages/AddNewUser';
import { Switch, Route, Redirect } from 'react-router';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Redirect exact from="/" to="home" />
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/curiosity">
          <Curiosity />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/add_new">
          <AddNewUser />
        </Route>
      </Switch>
    </>
  );
}

export default App;
