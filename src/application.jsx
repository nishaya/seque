import React from 'react'
import { render } from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import IndexComponent from 'components/index'
import reducers from 'reducers/index'
import applicationStyle from './application.scss'

const createPersistentStore = compose(
//  persistState('midiInput'),
)(createStore)

const middlewares = process.env.NODE_ENV === 'development' ?
  applyMiddleware(createLogger()) : applyMiddleware()

const store = createPersistentStore(reducers, middlewares)

render((<Provider store={store}>
  <IndexComponent />
</Provider>), document.getElementById('app'))
