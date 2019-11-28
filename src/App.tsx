import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import configureStore, { history } from "./models/configureStore";
import { renderRoutes, routeConfig } from "./routes";
import "./global.scss";

const store = configureStore({});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {renderRoutes(routeConfig)}
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
