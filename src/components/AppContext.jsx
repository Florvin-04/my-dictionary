import React, { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState("");
  const [result, setResult] = useState([]);
  const [audio, setAudio] = useState(null);
  const [darkMode, setDarkMode] = useState({
    darkMode: false,
  });

  const [font, setFont] = useState("Inter");

  return (
    <DataContext.Provider
      value={{
        searchResult,
        setSearchResult,
        result,
        setResult,
        audio,
        setAudio,
        darkMode,
        setDarkMode,
        font,
        setFont,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useGlobalData = () => {
  return useContext(DataContext);
};
