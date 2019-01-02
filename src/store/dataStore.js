import { createStore, applyMiddleware, compose } from 'redux';
import formReducer from '../reducers/formReducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

const logger = createLogger();
let middleware;
let composer;


if (process.env.NODE_ENV === 'development') {
  middleware = [
    logger,
  ];
  composer = composeWithDevTools;
  console.log("DEV");
} else {
  middleware = [];
  composer = compose;
  console.log("NON-DEV");
}

export default function configureStore() {

  const storage = createStore(
    formReducer, undefined, composer(applyMiddleware(...middleware),
    )
  )

  console.log("Datastore use");

  if (module.hot) {
      module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      storage.replaceReducer(nextReducer);
    });
  }

  return storage;
}