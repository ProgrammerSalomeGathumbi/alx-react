import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { createStore, applyMiddleware, compose } from 'redux';  
import { Provider } from 'react-redux'; 
import uiReducer from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  uiReducer,
  composeEnhancers(applyMiddleware(thunk)) // Use composeEnhancers to include Redux DevTools and thunk middleware
);

ReactDOM.render(
  <React.StrictMode>
    {/* Provide the store to the App component using Provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
