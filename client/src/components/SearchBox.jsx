// import React, { useState } from 'react';

// const SearchBox = (props) => {

//   return (
//     <div className='col'>
//         <input
//           className='w-[40%] text-white rounded-tl rounded-bl p-[10px] bg-gray-700'
//           value={props.value}
//           onChange={(event) => props.setSearchValue(event.target.value)}
//           placeholder='Search movies...'
//         ></input>
//         <button className='bg-[#F9C209] h-[45px] w-[10%] rounded-tr rounded-br' type="submit">Search</button>
//     </div>
//   );
// };

// export default SearchBox;

import React, { useState } from 'react';

const SearchBox = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event) => {
	event.preventDefault()
    props.onSearch(searchValue);
  };

  const handleKeyPress = (event) => {
	if (event.key === 'Enter') {
	  event.preventDefault();
	  handleSearch();
	}
  };

  return (
    <div className='col'>
      <input
        className='w-[40%] text-white rounded-tl rounded-bl p-[10px] bg-gray-700'
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyPress={handleKeyPress}
        placeholder='Search movies...'
      ></input>
      <button className='bg-[#F9C209] h-[45px] w-[10%] rounded-tr rounded-br' onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBox;
