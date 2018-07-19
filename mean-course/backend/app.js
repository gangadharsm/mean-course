const express = require('express');

const app = express();

app.use('/api/posts',(req, res , next) => {
    const posts = [
        {
            id:"1",
            title: "first title",
            content: "first content"
        }
    ]
    res.status(200).json({
        message: 'Posts fetched successfully!',
        posts: posts
    });
});


module.exports = app