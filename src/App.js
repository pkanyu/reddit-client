import React from "react";
import "./App.css";
import RedditPosts from "./features/reddit/RedditPosts";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <header>
        <SearchBar />
      </header>
      <main>
        <RedditPosts />
      </main>
    </div>
  );
}

export default App;
