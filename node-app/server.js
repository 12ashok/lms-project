const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

app.use(express.static('public'));

// Fetch courses from WordPress LMS
app.get('/api/courses', async (req, res) => {
    try {
        // 'wordpress' is the hostname defined in docker-compose
        const response = await axios.get('http://wordpress/wp-json/wp/v2/posts?categories=courses');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Could not fetch courses" });
    }
});

app.listen(3000, () => console.log('LMS Frontend running on port 3000'));