import {createStore,compose,combineReducers,applyMiddleware} from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import login from './reducer/login'
import reg from './reducer/reg'
import tabtable from './reducer/tabtable'
 
 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
 
const store=createStore(
  combineReducers({
    login,
    reg,
    tabtable
  }),
  composeEnhancers(applyMiddleware(promise,thunk))
)
 
 
export {store}