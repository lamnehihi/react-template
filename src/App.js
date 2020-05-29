import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isFocus: false,
      isOverChars: false,
    };
    let charss=[];
    setInterval(() => {
      
      let input = document.activeElement.tagName;
      let countElement = document.getElementById("input-search");
      countElement.addEventListener("keyup", function () {
        charss = countElement.value.split("");
        console.log(charss.length);
      });
      if(charss.length >= 10) {
        this.setState({
          isOverChars: true,
        });
      } else {
        this.setState({
          isOverChars: false,
        });
      }
      if (input === "INPUT") {
        this.setState({
          isFocus: true,
        });
      } else {
        this.setState({
          isFocus: false,
        });
      }
    }, 100);
  }

  render() {
    return (
      <div className="App">
        <SearchBar state={this.state} />
      </div>
    );
  }
}

export default App;
