import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//hoc
import WithAdminAuth from './hoc/withAdminAuth';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

import { setCurrentUser } from './redux/reducers/user/user-actions';


const App = ()=> {
  return (
      <div className="App container"> 
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>  
            <Route path='/login' component={Login}/>  
            <Route path='/dashboard'
              render={()=>(
                <WithAdminAuth>
                  <Dashboard/>
                </WithAdminAuth>
              )}
            />  
          </Switch>
        </Router>
    </div>
  );
}

export default App;
