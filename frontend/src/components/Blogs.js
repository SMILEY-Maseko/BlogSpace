import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Blogs.css';

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://blogspace-sk0e.onrender.com/api/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Blogs</h1>
      <div className="blog-container">
        {posts.map((post) => (
          <div className="blog-card" key={post.id}>
            <h2>{post.title}</h2>
            <Link to={`/blogs/${post.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
