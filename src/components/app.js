import React, { Component } from 'react';
import BookList from "../containers/bookList";
import BookDeatil from "../containers/bookDetail";

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDeatil />
      </div>
    );
  }
}
