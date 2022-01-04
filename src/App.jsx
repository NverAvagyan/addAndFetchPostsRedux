import React from "react";
import { connect } from "react-redux";
import "./App.css";
import AddPostForm from "./components/AddPostForm";
import AsyncPosts from "./components/AsyncPosts";
import Posts from "./components/Posts";
import ThemeButton from "./components/ThemeButton";

function App({ theme }) {
  document.body.className = theme;

  return (
    <div className="container">
      <div className="col mt-2">
        <ThemeButton />
      </div>
      <div className="col">
        <AddPostForm />
      </div>
      <div className="row">
        <div className="col">
          <h2>Sync Posts</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Async Posts</h2>
          <AsyncPosts />
        </div>
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    theme: state.app.theme,
  }),
  null
)(App);
