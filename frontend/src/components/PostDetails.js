import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./postdetails.css";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5001/api/posts/${id}`).then((response) => {
      setPost(response.data);
    });
  }, [id]);

  if (!post) return <h1>Loading...</h1>;

  return (
    <div className="post-details-container">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {post.pictureUrl && (
        <img src={post.pictureUrl} alt={post.title} />
      )}
      <p className="date">Published on: {new Date(post.date).toLocaleDateString()}</p>
    </div>
  );
};

export default PostDetails;
