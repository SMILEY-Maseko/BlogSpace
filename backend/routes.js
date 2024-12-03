const express = require('express');
const fs = require('fs');
const router = express.Router();

const dbFilePath = './db.json';

// Utility function to read data from db.json
const readDb = () => {
    try {
        const data = fs.readFileSync(dbFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

// Utility function to write data to db.json
const writeDb = (data) => {
    fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
};

// Get all blog posts
router.get('/posts', (req, res) => {
    const posts = readDb();
    res.json(posts);
});

// Get a single blog post by ID
router.get('/posts/:id', (req, res) => {
    const posts = readDb();
    const postId = req.params.id;
    const post = posts.find(post => post.id === postId);

    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }

    res.json(post);
});

// Add a new blog post
router.post('/posts', (req, res) => {
    const posts = readDb();
    const newPost = req.body;
    posts.push(newPost);
    writeDb(posts);
    res.status(201).json(newPost);
});

// Delete a blog post by ID
router.delete('/posts/:id', (req, res) => {
    const posts = readDb();
    const postId = req.params.id;
    const updatedPosts = posts.filter(post => post.id !== postId);

    if (posts.length === updatedPosts.length) {
        return res.status(404).json({ message: 'Post not found' });
    }

    writeDb(updatedPosts);
    res.status(200).json({ message: 'Post deleted successfully' });
});

module.exports = router;
