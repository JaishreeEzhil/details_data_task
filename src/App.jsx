import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AppBar from './components/appbar';
import './App.css';
import Page from './components/page';
import UsersList from './components/usersList';
import User from './components/user';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Switch>
        <Route path="/add">
          <Page title="Add user" Component={User} />
        </Route>
        <Route path="/edit/:id">
          <Page title="Edit user" Component={User} />
        </Route>
        <Route path="/" exact>
          <Page title="Users list" Component={UsersList} />
        </Route>
        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
