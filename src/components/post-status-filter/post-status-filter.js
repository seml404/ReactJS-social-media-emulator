import React, { Component } from "react";
import { Button } from "reactstrap";
import "./post-status-filter.css";

export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { name: "all", label: "All posts" },
      { name: "Liked", label: "liked" },
    ];
    this.state = {};
  }

  render() {
    const { filter, switchFilter } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const active = filter === name;
      return (
        <Button
          className={active ? "btn btn-info" : "btn btn-outline"}
          key={name}
          onClick={() => switchFilter(name)}
        >
          {label}
        </Button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
