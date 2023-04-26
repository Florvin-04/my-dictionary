import React, { useState, useRef } from "react";
import "./SearchBar.scss";
import { useGlobalData } from "./AppContext";

function SearchBar() {
  const { setSearchResult } = useGlobalData();

  const inputRef = useRef(null);

  function handleFormSubmit(e) {
    e.preventDefault();
    setSearchResult(inputRef.current.value);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder=""
        ref={inputRef}
      />
      <label htmlFor="search">Search</label>
    </form>
  );
}

export default SearchBar;
