const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
const posts = [];

app.get('/', (req, res) => {
    const blogPosts = [
        {
            title: 'test',
            createdDate: new Date(),
            description: 'test description'
        },
        {
            title: 'testn2',
            createdDate: new Date(),
            description: 'test description'
        }

    ]


    res.render('index.ejs', { blogpost: blogPosts });
});

app.get('/new', (req, res) => {
    res.render('new.ejs');
});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
