import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance';
import './ArticleList.css';


const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axiosInstance.get('/articles');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h2>Articles</h2>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            <p><i>By {article.author}</i></p>
            <p><small>{new Date(article.date).toLocaleDateString()}</small></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
