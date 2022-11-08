import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

import reducers from './reducers';
import sagas from "./sagas";

const persistConfig = {
    key: 'root',
    storage
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

export function configureStore() {

    const persistedReducer = persistReducer(persistConfig, reducers)

    const store = createStore(
        persistedReducer,
        compose(applyMiddleware(...middlewares))
    );

    let persistor = persistStore(store)

    sagaMiddleware.run(sagas);

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return { store, persistor };
}
