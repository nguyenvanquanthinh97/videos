import React from 'react';

import './SearchBar.css';

class SearchBar extends React.Component {
	state = { term: 'REACTJS' };

	onFormSubmit = (event) => {
		event.preventDefault();
		/**
     * ToDo:
     * Pass a callback function to execute search
     */
		this.props.onSearchSubmit(this.state.term);
	};

	onInputChange = (event) => {
		this.setState({ term: event.target.value });
	};

	render() {
		const { term } = this.state;
		return (
			<div className="search-bar ui segment" style={{ marginTop: '10px' }}>
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Search Video: </label>
						<input type="text" onChange={this.onInputChange} value={term} />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
