const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
const blogPosts = [];



app.get('/', (req, res) => {
    res.render('index.ejs', { blogpost: blogPosts });
});



app.get('/new', (req, res) => {
    res.render('new.ejs');
});

app.post('/create', (req, res) => {

    const title = req.body.title;
    const description = req.body.description;
    const newPost = {
        title: title,
        createdDate: new Date(),
        description: description
    };
    blogPosts.push(newPost);
    res.redirect('/');

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
