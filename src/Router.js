import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {Home} from './components/Home'
import { Posts } from './components/Posts'
import { Comments } from './components/Comments'

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Posts} exact path="/:id/posts"/>
      <Route component={Comments} exact path="/:id/comments"/>

    </Switch>
  </BrowserRouter>
)

