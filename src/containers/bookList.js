import React, { Component } from 'react';
import { connect }from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return(
        <li key={book.title}
          onClick={()=> this.props.selectBook(book)}
          className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // whatever object is returned with show up as props in BookList
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the result should be passed to all
  // reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// connect takes a function and a component and returns a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
