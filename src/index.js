import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './features';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
