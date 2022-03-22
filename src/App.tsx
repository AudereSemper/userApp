import React from 'react';
import { useSelector } from 'react-redux';
import Home from 'src/app/pages/Home';
import Header from 'src/app/components/Header';
import Curiosity from 'src/app/pages/Curiosity';
import About from 'src/app/pages/About';
import AddNewUser from 'src/app/pages/AddNewUser';
import { Switch, Route, Redirect } from 'react-router';

function App() {
  const routerlocation = useSelector((state: any) => state.router.location);
  const background = routerlocation.state && routerlocation?.state?.pathname;
  console.log('🚀 ~ file: App.tsx ~ line 13 ~ App ~ background', background);
  return (
    <>
      <Header />
      {/* eslint-disable-next-line no-restricted-globals */}
      <Switch location={background || routerlocation}>
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
        <Route path="/user_detail/:id">
          <AddNewUser />
        </Route>
        {
          background
          && (
            <Route path="/modal_layer">
              <h1>ciao</h1>
            </Route>
          )
        }
      </Switch>
    </>
  );
}

export default App;
