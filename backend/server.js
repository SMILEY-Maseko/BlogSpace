const express = require('express');
const cors = require('cors'); // Import cors
const routes = require('./routes'); // Import routes from routes.js

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(express.json()); // Middleware to parse JSON
app.use('/api', routes); // Use the routes defined in routes.js

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

