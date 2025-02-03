// src/components/ArticleList.js
import React from "react";
import Article from "./Article";  // Import the Article component

const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          date={article.date}
        />
      ))}
    </main>
  );
};

export default ArticleList;
