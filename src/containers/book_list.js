import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';
import { bindActionCreators } from 'redux';
import '../css/list_style.css';

class BookList extends Component {

	renderList() {
		return this.props.books.map(book => {
			return(
				<li 
					key={book.title} 
					className="list-group-item"
					onClick={() => this.props.selectBook(book)}>
					{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4 book-list">
				{this.renderList()}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	// State requested from here is set to props
	return {
		books: state.books
	};
}

function mapDispatchToProps(dispatch) {
	// When selectBook called, result
	// should be passed to reducers
	return bindActionCreators({ selectBook }, dispatch);
}

// Promote BookList from component to container.
// BookList needs to know about state and actions.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);