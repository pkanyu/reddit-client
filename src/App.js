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
        <div className="App">
          <header>
            <SearchBar />
          </header>
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <CategoryFilter />
                    <RedditPosts />
                  </>
                }
              />
              <Route path="/post/:postId" element={<RedditPostDetail />} />
            </Routes>
          </main>
        </div>
      </ErrorBoundary>
  );
}

export default App;
