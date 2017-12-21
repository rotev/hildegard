import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'

export default function() {
  let store = createStore(reducer, composeWithDevTools())
  return store
}
