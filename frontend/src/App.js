import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { Container } from "reactstrap";

import AppNavbar from "./components/appNavbar";
import ShoppingList from "./components/shoppingList";
import ItemModal from "./components/itemModal";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
