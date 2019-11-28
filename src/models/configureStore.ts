import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./createRootReducer";
import rootSaga from "./rootSaga";

export const history = createBrowserHistory();

const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

export default function configureStore(preloadedState: any) {
  const sagaMiddleware = createSagaMiddleware();

  const enhancer = composeEnhancers(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      sagaMiddleware
    )
    // other store enhancers if any
  );

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    enhancer
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
