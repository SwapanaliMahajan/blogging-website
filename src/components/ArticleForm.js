import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';
import './FormStyles.css';

const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/articles', { title, content, author });
      alert('Article created successfully');
    } catch (error) {
      console.error('Error creating article', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Article</h2>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
      </div>
      <div>
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ArticleForm;
