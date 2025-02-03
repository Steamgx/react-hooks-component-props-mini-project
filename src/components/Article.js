// src/components/Article.js
const Article = ({ title, date }) => {
    return (
      <article>
        <h2>{title}</h2>
        <p>{date}</p>
      </article>
    );
  };
  
  export default Article;
  