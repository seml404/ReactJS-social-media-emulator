import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
    this.searchInProgress = this.searchInProgress.bind(this);
  }
  searchInProgress(e) {
    this.setState({
      term: e.target.value,
    });
    this.props.define(this.state.term);
  }
  render() {
    return (
      <input
        onChange={this.searchInProgress}
        className="form-control search-input"
        type="text"
        placeholder="search for entries"
      ></input>
    );
  }
}
