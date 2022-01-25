import React, { useState, useEffect } from "react";
import clsx from "clsx";

import { usePreviousValue } from "../helpers/HelpersFunction";

const SearchComponent = (props) => {
  const {
    getSearch = () => {},
    inputClass = "",
    placeholder = "Search",
  } = props;
  const [searchText, setSearchText] = useState("");
  const previousSearchText = usePreviousValue(searchText || "");

  useEffect(() => {
    if (searchText.length > 2) {
      getSearch(searchText);
    } else if (
      searchText.length === 0 &&
      previousSearchText &&
      searchText !== previousSearchText &&
      searchText.length < previousSearchText.length
    ) {
      getSearch("");
    }
  }, [searchText, previousSearchText, getSearch]);

  return (
    <div
      className={clsx(["flex-start-center", "search-component", inputClass])}
    >
      <img
        src="/img/Search.svg"
        style={{ width: 18, height: 18 }}
        className="icon"
        alt="search icon"
      />
      <input
        type="text"
        placeholder={placeholder ? placeholder : "Search"}
        name="searchText"
        value={searchText}
        style={{ marginLeft: 6 }}
        onChange={({ target }) => setSearchText(target.value)}
        className="input-search"
      />
    </div>
  );
};

export default SearchComponent;
