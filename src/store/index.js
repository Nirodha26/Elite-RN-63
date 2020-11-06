import { createStore, applyMiddleware } from 'redux'
import moviesReducer from './reducer';

// Custom Middleware
// const asyncFunctionMiddleware = store => next => action => {
//     // If the "action" is actually a function instead...
//     if (typeof action === 'function') {
//       // then call the function and pass `dispatch` and `getState` as arguments
//       return action(store.dispatch, store.getState)
//     }
  
//     // Otherwise, it's a normal action - send it onwards
//     return next(action)
//   }

// const middlewareEnhancer = applyMiddleware(asyncFunctionMiddleware)

export default store = createStore(moviesReducer)



