import React from "react";
import './about.css'; // Import the CSS for About component

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="intro">
        Welcome to our blog! We're passionate about sharing knowledge, stories, and ideas on a variety of topics.
      </p>
      <div className="about-content">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a platform for writers and readers to connect, exchange ideas, and grow together. We believe in the power of storytelling and strive to create a space where creativity thrives.
        </p>
        <h2>Who We Are</h2>
        <p>
          We are a diverse team of writers, bloggers, and creatives who are passionate about the written word. Our blog covers a wide range of topics from lifestyle and technology to art and personal growth.
        </p>
        <h2>Contact Us</h2>
        <p>
          Feel free to get in touch with us through our contact page if you have any questions, suggestions, or feedback!
        </p>
      </div>
    </div>
  );
};

export default About;
