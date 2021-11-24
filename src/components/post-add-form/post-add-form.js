import React, { Component } from "react";

import "./post-add-form.css";

export default class PostAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      defaultValue: "",
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange(e) {
    this.setState({
      text: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: "",
    });
  }

  render() {
    // const { onAdd } = this.props;
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="please,make a new post"
          className="form-control new-post-label"
          onChange={this.onValueChange}
          value={this.state.text ? this.state.text : ""}
        ></input>
        <button
          type="submit"
          className="btn btn-outline-secondary"
          // onClick={(e) => onAdd(e, "heyyou")}
        >
          Add Post
        </button>
      </form>
    );
  }
}
