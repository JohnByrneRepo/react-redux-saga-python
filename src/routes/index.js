import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage'
import DetailsPage from './DetailsPage'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/details/:id" component={DetailsPage} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
