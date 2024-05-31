import React from "react";
import "./App.css";
import RedditPosts from "./features/reddit/RedditPosts";
import SearchBar from "./components/SearchBar";
import ErrorBoundary from "./components/ErrorBoundary";
import RedditPostDetail from "./features/reddit/RedditPostDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <header>
          <SearchBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<RedditPosts />} />
            <Route path="/post/:postId" element={<RedditPostDetail />} />
          </Routes>
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;
