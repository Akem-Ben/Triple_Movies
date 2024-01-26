import React from 'react';
import SearchBox from './SearchBox';

const MovieListHeading = (props) => {
	return (
		<>
		<div className="bg-[#000000] w-full p-[20px] h-[50%] gap-[20%] flex items-center justify-center">
			<h1 className='text-[#F9C209] font-Holtwood text-3xl'>{props.heading}</h1>
			<div className='flex items-center justify-center w-full'>
				<div className='w-[100%]'>
			<SearchBox />
			</div>
			</div>
		</div>
		</>
	);
};

export default MovieListHeading;
