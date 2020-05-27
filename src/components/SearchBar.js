import React, { Component } from "react";
import "./SearchBar.css"

class SearchBar extends Component {
  render() {
    const isFocus = this.props.isFocus;
    return (
      <div className="Search-bar">
        <input id="input-search" className="input" placeholder="Type something to search ..." />
        {
          isFocus === false && <img src="https://image.flaticon.com/icons/svg/483/483356.svg" />
        }
      </div>
    );
  }
}

export default SearchBar;

