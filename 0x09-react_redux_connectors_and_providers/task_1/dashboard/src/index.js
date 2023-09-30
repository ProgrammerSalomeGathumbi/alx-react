import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { createStore } from 'redux'; 
import { Provider } from 'react-redux'; 
import rootReducer from './reducers';

const store = createStore(rootReducer); 

ReactDOM.render(
		  <React.StrictMode>
		      {/* Provide the store to the App component using Provider */}
		          <Provider store={store}>
			        <App />
				    </Provider>
				      </React.StrictMode>,
				        document.getElementById('root')
	       );
