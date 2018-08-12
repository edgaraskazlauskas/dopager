import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './components/app';
import { store, persistor, history } from './configureStore';
import { ConnectedRouter } from 'connected-react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
