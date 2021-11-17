import React from "react";

import "./search-panel.css";

const SearchPanel = () => {
  return (
    <input
      className="form-control search-input"
      type="text"
      placeholder="search for entries"
    ></input>
  );
};

export default SearchPanel;
