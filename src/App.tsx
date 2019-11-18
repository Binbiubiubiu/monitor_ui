import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./models/store";
import { renderRoutes, routeConfig } from "./routes";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>{renderRoutes(routeConfig)}</Router>
    </Provider>
  );
};

export default App;
