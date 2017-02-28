import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/detail_style.css';

class BookDetail extends Component {

	render() {

		if(!this.props.book) {
			return <div className="book-detail">Select a book to get started</div>;
		}	

		return(
			<div className="book-detail">
				<h3>Details for:</h3>
				<div>title: {this.props.book.title}</div>
				<div>pages: {this.props.book.pages}</div>
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