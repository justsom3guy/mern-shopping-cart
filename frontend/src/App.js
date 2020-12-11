import React, { Component } from "react";

import AppNavbar from "./components/appNavbar";

import "bootstrap/dist/css/bootstrap.min.css";

export class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        hello world
      </div>
    );
  }
}

export default App;
