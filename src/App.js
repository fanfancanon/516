import React, { Component } from 'react'
import Home from './pages/home'
import Login from './pages/login'
import Reg from './pages/reg'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
        <div>
          <Switch>
              <Route path='/login' component={Login}></Route>
              <Route path='/reg' component={Reg}></Route>
              <Route path='/home' component={Home}></Route>
              <Redirect from='/' to='/login'></Redirect>
          </Switch>
        </div>
    )
  }
}
