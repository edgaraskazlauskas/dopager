import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import rootReducer, { initialiseApp } from './features';
import todosApiMiddleware from './features/todos/middleware';
import categoriesApiMiddleware from './features/categories/middleware';

const persistedReducer = persistReducer({ key: 'root', storage }, rootReducer);
const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export const history = createBrowserHistory();
export const store = createStore(
    connectRouter(history)(persistedReducer), // new root reducer with router state
    /* preloadedState, */
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history), // for dispatching history actions
            thunk,
            todosApiMiddleware,
            categoriesApiMiddleware
        )
    )
);

export const persistor = persistStore(store, {}, () => {
    store.dispatch(initialiseApp());
});
