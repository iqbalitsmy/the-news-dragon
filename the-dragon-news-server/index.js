const express = require('express')
const app = express();
var cors = require('cors')
const port = 3000

app.use(cors())
const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/categories', (req, res) => {
    res.send(categories);
})
app.get('/categories/:category_id', (req, res) => {
    const category_id = req.params.category_id;
    if (category_id == 0) {
        res.send(news)
    } else {
        const selected = news.filter(n => n.category_id === category_id);
        res.send(selected);
    }
})
app.get('/news', (req, res) => {
    res.send(news);
})
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})