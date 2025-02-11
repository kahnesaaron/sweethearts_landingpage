const express = require('express');
const app = express();

// Serve static files from current directory
app.use(express.static(__dirname));

// Basic route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start server on port 3001
app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});