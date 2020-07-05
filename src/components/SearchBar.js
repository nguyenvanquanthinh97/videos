import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {
	const [ term, setTerm ] = useState('REACTJS');

	const onFormSubmit = (event) => {
		event.preventDefault();
		onSearchSubmit(term);
	};

	return (
		<div className="ui segment" style={{ marginTop: '10px' }}>
			<form onSubmit={onFormSubmit} className="ui form">
				<div className="field">
					<label>Search Video: </label>
					<input type="text" onChange={(e) => setTerm(e.target.value)} value={term} />
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
