import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RedditPosts from "./features/reddit/RedditPosts";
import RedditPostDetail from "./features/reddit/RedditPostDetail";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <header>
            <SearchBar />
            <Routes>
              <Route path="/" element={<CategoryFilter />} />
            </Routes>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<RedditPosts />} />
              <Route path="/post/:postId" element={<RedditPostDetail />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
