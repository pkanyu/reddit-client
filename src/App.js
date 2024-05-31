import React from "react";
import "./App.css";
import RedditPosts from "./features/reddit/RedditPosts";
import SearchBar from "./components/SearchBar";
import ErrorBoundary from "./components/ErrorBoundary";
import RedditPostDetail from "./features/reddit/RedditPostDetail";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <header>
          <SearchBar />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={RedditPosts} />
            <Route path="/post/:postId" component={RedditPostDetail} />
          </Switch>
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;
