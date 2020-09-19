import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import "./App.css";
import FlatsPage from "./pages/flatsPage";
import rootReducer from "./reducers/rootReducer";
import flatsSagas from './sagas/flats';

const sagaMiddleWare = createSagaMiddleware();
const reduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = reduxDevTools || compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);
sagaMiddleWare.run(flatsSagas);

function App() {
  return (
    <>
      <Provider store={store}>
        <FlatsPage />
      </Provider>
    </>
  );
}

export default App;
