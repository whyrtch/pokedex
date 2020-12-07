import { applyMiddleware, createStore } from 'redux';
import reducerApp from './reducer';
import thunk from 'redux-thunk'

let reduxStore = createStore(reducerApp, applyMiddleware(thunk));

export default reduxStore;