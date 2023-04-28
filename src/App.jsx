import { useState } from "react";

import "./App.scss";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import DisplayResult from "./components/DisplayResult";
import { useGlobalData } from "./components/AppContext";

function App() {
  const { darkMode, font } = useGlobalData();

  return (
    <div
      className="App"
      data-theme={`${darkMode.darkMode ? "dark-theme" : ""}`}
      data-font={`font-${font}`}
    >
      <div className="dict__container">
        <Header />
        <main>
          <SearchBar />
          <DisplayResult />
        </main>
      </div>
    </div>
  );
}

export default App;
