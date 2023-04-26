import React, { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState("");
  const [result, setResult] = useState([]);

  return (
    <DataContext.Provider
      value={{
        searchResult,
        setSearchResult,
        result,
        setResult,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useGlobalData = () => {
  return useContext(DataContext);
};
