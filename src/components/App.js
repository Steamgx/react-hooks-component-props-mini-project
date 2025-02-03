import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog"; // assuming data is in a file called blog.js

function App() {
  return (
    <div>
      <Header name="My Blog" />
      <About image="https://via.placeholder.com/215" about="This is a blog about tech and programming." />
      <ArticleList articles={blogData} />
    </div>
  );
}

export default App;
