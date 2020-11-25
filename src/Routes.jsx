import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import {List} from './pages/List'
import Notice from './pages/Notice'
import Profile from './pages/Profile'

function Routes() {
    return(
        <BrowserRouter>
        <Route path="/" exact component={List} />
        <Route path="/news/:id" component={Notice} />
        <Route path="/profile" component={Profile} />
        </BrowserRouter>
    )
}

export default Routes