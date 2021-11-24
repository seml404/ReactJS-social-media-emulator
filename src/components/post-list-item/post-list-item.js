import React, { Component } from "react";

import "./post-list-item.css";

export default class PostListItem extends Component {
  // constructor({ label, important }) {
  //   super({ label, important });
  // }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     important: false,
  //     like: false,
  //   };
  //   this.onImportant = this.onImportant.bind(this);
  //   this.onLike = this.onLike.bind(this);
  // }

  // onImportant(e) {
  //   //SEML I added stopPropogation
  //   e.stopPropagation();
  //   this.setState(({ important }) => ({
  //     important: !important,
  //   }));
  // }

  // onLike() {
  //   this.setState(({ like }) => ({
  //     like: !like,
  //   }));
  // }
  render() {
    // const { label } = this.props;
    // const { important, like } = this.state;

    // SEML my version without destructuring
    // let classNames = "app-list-item d-flex justify-content-between";
    // if (this.state.important) {
    //   classNames += " important";
    // }
    // if (this.e.like) {
    //   classNames += " like";
    // }
    const {
      label,
      onDelete,
      onToggleLiked,
      onToggleImportant,
      important,
      like,
    } = this.props;

    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }
    if (like) {
      classNames += " like";
    }

    return (
      <div className={classNames}>
        <span className="app-list-item-label" onClick={onToggleLiked}>
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            onClick={onToggleImportant}
            className="btn-star btn-sm"
          >
            <i className="fa fa-star"></i>
          </button>
          <button type="button" className="btn-trash btn-sm">
            <i className="fa fa-trash-o" onClick={onDelete}></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    );
  }
}

// const PostListItem = ({ label, important = false }) => {
//   let classNames = "app-list-item d-flex justify-content-between";
//   if (important) {
//     classNames += " important";
//   }
//   return (
//     <div className={classNames}>
//       <span className="app-list-item-label">{label}</span>

//       <div className="d-flex justify-content-center align-items-center">
//         <button type="button" className="btn-star btn-sm">
//           <i className="fa fa-star"></i>
//         </button>
//         <button type="button" className="btn-trash btn-sm">
//           <i className="fa fa-trash-o"></i>
//         </button>
//         <i className="fa fa-heart"></i>
//       </div>
//     </div>
//   );
// };

// export default PostListItem;
