import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {

    // This handles the initial load where there the state is null
    if (!this.props.book){
      return <div>Select a book</div>;
    }

    return (
      <div>
        <h3> Details for:</h3>
        <div>{this.props.book.title}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
