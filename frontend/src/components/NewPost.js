import React, { useState } from "react";
import axios from "axios";
import './newposts.css';

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5001/api/posts", { title, content }).then(() => {
      alert("");
    });
  };

  return (
  
    <form onSubmit={handleSubmit}>
      <h1>Create a New Post</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );


};
  
export default NewPost;

