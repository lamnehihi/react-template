import React, { Component } from "react";
import "./SearchBar.css"
import classNames from "classnames";

class SearchBar extends Component {
  render() {
    const state = this.props.state;
    const isFocus = state.isFocus;
    const isOverChars = state.isOverChars;
    return (
      <div className={classNames('Search-bar ', {
        "Search-bar-arlet" : isOverChars === true
      })}>
        <input id="input-search" className="input" placeholder="Type something to search ..." />
        {
          isFocus === false && <img src="https://image.flaticon.com/icons/svg/483/483356.svg" />
        }
      </div>
    );
  }
}

export default SearchBar;

