import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { List } from './pages/List'
import Notice from './pages/Notice'
import Profile from './pages/Profile'

function Routes({ authUser }) {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={List} />
        <Route path="/news/:id" component={(props) => {
          return authUser.authenticated ? <Notice {...props} /> : <Redirect to='/' />
        }} />
        <Route path="/profile/user/:id" component={(props) => authUser.authenticated ? <Profile {...props} /> : <Redirect to='/' />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes