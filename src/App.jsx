import { useState } from "react";

import "./App.scss";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import DisplayResult from "./components/DisplayResult";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SearchBar />
        <DisplayResult />
      </main>
    </div>
  );
}

export default App;
