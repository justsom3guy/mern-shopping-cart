import React, { Component } from "react";

import AppNavbar from "./components/appNavbar";
import ShoppingList from "./components/shoppingList";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
