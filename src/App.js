import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isFocus: false,
    };

    setInterval(() => {
      let input = document.activeElement.tagName;
      if (input === "INPUT") {
        this.setState({
          isFocus: true,
        });
      }else {
        this.setState({
          isFocus: false,
        });
      }
    }, 1);
  }

  render() {
    return (
      <div className="App">
        <SearchBar isFocus={this.state.isFocus} />
      </div>
    );
  }
}

export default App;
