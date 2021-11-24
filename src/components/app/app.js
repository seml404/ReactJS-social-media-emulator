import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";

import styled from "styled-components";

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

// const StyledAppBlock = styled(AppBlock)`
//   background-color: grey;
// `;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "random text", important: true, like: false, id: 1 },
        { label: "lorem", important: false, like: false, id: 2 },
        {
          label: "aafam",
          important: false,
          like: false,
          id: 3,
        },
        { label: "lorem 3", important: false, like: false, id: 4 },
      ],
      term: "",
      filter: "all",
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.maxId = this.state.data.length;

    this.defineTerm = this.defineTerm.bind(this);
    this.searchPost = this.searchPost.bind(this);

    this.filterPosts = this.filterPosts.bind(this);
    this.switchFilter = this.switchFilter.bind(this);
  }
  deleteItem(itemId) {
    // let deletedItem = this.state.data.filter((item) => item.id === itemId);
    this.setState(({ data }) => {
      const amendedArr = [...data];
      return {
        data: amendedArr.filter((item) => item.id !== itemId),
      };
    });
  }
  addItem(text) {
    // e.preventDefault();
    // this.setState(({ data }) => {
    //   const amendedArr = [...data];
    //   amendedArr.unshift({
    //     label: text,
    //     important: false,
    //     id: Math.random(),
    //   });
    //   return {
    //     data: amendedArr,
    //   };
    // });
    if (text.length > 0) {
      this.setState(({ data }) => {
        const newItem = {
          label: text,
          important: false,
          id: ++this.maxId,
        };
        const newArr = [...data, newItem];
        return {
          data: newArr,
        };
      });
    }
  }

  propertyToggler(property, id) {
    this.setState(({ data }) => {
      let itemChanged = [...data].find((item) => item.id === id);
      let correctItem = {};
      Object.assign(correctItem, itemChanged);
      correctItem[property] = !correctItem[property];
      let updatedData = [...data];
      updatedData.splice(
        updatedData.findIndex((item) => item.id === id),
        1,
        correctItem
      );
      return {
        data: updatedData,
      };
    });
  }

  onToggleImportant(id) {
    this.propertyToggler(`important`, id);
  }

  onToggleLiked(id) {
    this.propertyToggler(`like`, id);
  }

  searchPost(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => item.label.includes(term));
  }

  defineTerm(value) {
    this.setState({
      term: value,
    });
  }

  filterPosts(items, filter) {
    if (filter === "Liked") {
      return items.filter((item) => item.like === true);
    } else {
      return items;
    }
  }

  switchFilter(value) {
    this.setState(() => {
      return {
        filter: value,
      };
    });
    console.log("changed");
    console.log(this.state.filter);
  }

  render() {
    const { data, term, filter } = this.state;
    const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);
    const liked = data.filter((item) => item.like).length;
    const allPosts = data.length;
    return (
      <AppBlock>
        <AppHeader likes={liked} postsCount={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel define={this.defineTerm} />
          <PostStatusFilter filter={filter} switchFilter={this.switchFilter} />
        </div>
        <PostList
          // posts={data}
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem} />
      </AppBlock>
    );
  }
}
// const App = () => {
//   const data = [
//     { label: "random text", important: true, id: Math.random() },
//     { label: "lorem", important: false, id: Math.random() },
//     { label: "another lorem", important: false, id: Math.random() },
//     { label: "lorem 3", important: false, id: Math.random() },
//   ];
//   return (
//     <AppBlock>
//       <AppHeader />
//       <div className="search-panel d-flex">
//         <SearchPanel />
//         <PostStatusFilter />
//       </div>
//       <PostList posts={data} onDelete={(id) => console.log(id)} />
//       <PostAddForm />
//     </AppBlock>
//   );
// };

// export default App;
