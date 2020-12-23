import React from "react";
import ReactDOM from "react-dom";
import Login from "../src/views/Login";
import configureStore from "./store";
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Login></Login>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
