import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Users from './components/users';
import Posts from './components/posts';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Switch>
          <Route component={Users} path="/" exact />
          <Route component={Posts} path="/user/:userId" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
