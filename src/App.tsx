import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import Routers from "routers";
import store from "redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routers></Routers>;
    </Provider>
  );
}

export default App;
