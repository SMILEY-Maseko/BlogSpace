import React from "react";
import './home.css'; // Import the CSS for the Home component

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to the Blog</h1>
        <p className="subheading">Your go-to place for amazing articles and stories</p>
        <button className="cta-button">Explore Blogs</button>
      </div>
      <div className="features-section">
        <div className="feature">
          <h2>Read Interesting Articles</h2>
          <p>Stay updated with our latest blog posts on various topics.</p>
        </div>
        <div className="feature">
          <h2>Write Your Own Stories</h2>
          <p>Share your thoughts with the world by creating new blog posts.</p>
        </div>
        <div className="feature">
          <h2>Join the Community</h2>
          <p>Connect with like-minded people and discuss your favorite topics.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
