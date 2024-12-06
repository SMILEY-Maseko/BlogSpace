import React, { useState } from "react";
import axios from "axios";
import './newposts.css';

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://blogspace-sk0e.onrender.com/api/posts", { title, content, pictureUrl, author, date })
      .then(() => {
        alert("Post created successfully!");
      })
      .catch((err) => {
        alert("Error creating post: " + err.message);
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
      <input
        type="text"
        placeholder="Picture URL"
        value={pictureUrl}
        onChange={(e) => setPictureUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewPost;
