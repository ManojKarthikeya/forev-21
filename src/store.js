import { configureStore } from '@reduxjs/toolkit'
import { compose, applyMiddleware  } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import reducer from './store/reducer'

const sageMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default configureStore(
  reducer,
  composeEnhancers(applyMiddleware(sageMiddleware))
)
