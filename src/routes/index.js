import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage'
import DetailsPage from './DetailsPage'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <HomePage />
      </div>
    )
  }
}
