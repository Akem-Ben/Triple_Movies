import React, { useState, useEffect } from "react";

const SearchBox = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (event) => {
    // event.preventDefault();
    props.onSearch(searchValue);
    updateSearchHistory(searchValue);
    if (searchValue.trim() !== "") {
      props.onSearch(searchValue);
      updateSearchHistory(searchValue);
    }
  };

  const updateSearchHistory = (value) => {
    const updatedHistory = [value, ...searchHistory.slice(0, 4)];
    setSearchHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
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
    localStorage.removeItem("searchHistory");
  };

  const handleHistoryItemClick = async (event, item) => {
    try{
      event.preventDefault();
      setSearchValue(item);
      props.onSearch(item);
      console.log('p', await props.onSearch(item))
      return setIsFocused(false);
    }catch(error){
      console.log(error)
    }
  };

  useEffect(() => {
    const storedHistory = localStorage.getItem("searchHistory");
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);

  return (
    <div className="col relative">
      <input
        className="w-full md:w-[60%] text-white rounded-tl rounded-bl p-[10px] bg-gray-700"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onFocus={handleFocus}
        onKeyPress={handleKeyPress}
        placeholder="Search movies..."
      ></input>
      <button
        className="md:ml-1 bg-[#F9C209] h-[45px] w-[20%] md:w-[20%] rounded-tr rounded-br mt-2 md:mt-0"
        onClick={handleSearch}
      >
        Search
      </button>
      {isFocused && searchHistory.length > 0 && (
        <div
         onBlur={handleBlur}
          className="absolute top-full left-0 bg-gray-900 bg-opacity-80 w-full md:w-[50%] rounded mt-1 md:mt-0 p-2"
          style={{ zIndex: 1000 }}
        >
          <ul>
            {searchHistory.map((item, index) => (
              <div
                className="flex p-[10px] justify-between"
                key={index}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#444")}
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
              >
                  <li className="text-gray-300 flex mb-1" onClick={(event) => handleHistoryItemClick(event, item)}>{item}</li>
                {/* <p
                  className="w-5 h-5 p-[3%] text-gray-300 flex justify-center items-center border rounded-full"
                  onClick={() => {
                    const updatedHistory = searchHistory.filter(
                      (historyItem) => historyItem !== item
                    );
                    setSearchHistory(updatedHistory);
                    localStorage.setItem(
                      "searchHistory",
                      JSON.stringify(updatedHistory)
                    );
                  }}
                >
                  x
                </p> */}
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
