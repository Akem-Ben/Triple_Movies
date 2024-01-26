import React from 'react';

const SearchBox = (props) => {
	return (
		<div className='col'>
			<input
				className='w-[60%] text-white rounded p-[10px] bg-gray-700'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Search movies...'
			></input>
		</div>
	);
};

export default SearchBox;
