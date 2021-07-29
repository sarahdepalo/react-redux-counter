import { createStore } from 'redux';
import { counter } from './reducers';

const defaultState = {
    count: 0
}

export const store = createStore(
    counter, 
    defaultState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());