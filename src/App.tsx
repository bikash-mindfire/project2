import React from 'react'
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css'

import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <Router>
      <Switch>
      <Route path='/login'>
          <LogIn />
        </Route>
        <Route path='/'>
          <SignUp />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
