import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import RouterMain from "./Config/router";
import store from "./Store";
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterMain />
      </div>
    </Provider>
  );
}

export default App;
