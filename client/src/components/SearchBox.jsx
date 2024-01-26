import React, { useState, useEffect } from 'react';

const SearchBox = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (event) => {
	event.preventDefault()
    props.onSearch(searchValue);
    // updateSearchHistory(searchValue);
    if (searchValue.trim() !== '') {
      props.onSearch(searchValue);
      updateSearchHistory(searchValue);
    }
  };

  const updateSearchHistory = (value) => {
    const updatedHistory = [value, ...searchHistory.slice(0, 4)];
    setSearchHistory(updatedHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  };

  const handleKeyPress = (event) => {
	if (event.key === 'Enter') {
	  event.preventDefault();
	  handleSearch(event);
	}
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  const handleHistoryItemClick = (item) => {
    setSearchValue(item);
    props.onSearch(item);
  };

  useEffect(() => {
    const storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);

  return (
    <div className='col relative'>
      <input
        className='w-[40%] text-white rounded-tl rounded-bl p-[10px] bg-gray-700'
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
        placeholder='Search movies...'
      ></input>
      <button className='bg-[#F9C209] h-[45px] w-[10%] rounded-tr rounded-br' onClick={handleSearch}>
        Search
      </button>
      {isFocused && searchHistory.length > 0 &&  (
        <div className="absolute top-full left-0 bg-gray-900 bg-opacity-80 w-[50%] rounded mt-[1%] p-[8px]">
          <ul>
            {searchHistory.map((item, index) => (
              <li className='text-gray-300' key={index} onClick={() => handleHistoryItemClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
