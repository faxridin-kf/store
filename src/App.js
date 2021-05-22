import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import Store from "./components/store/storefile/store";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Store />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
