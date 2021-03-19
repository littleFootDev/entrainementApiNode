const bodyParser = require('body-parser');
const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose')

require('./models/db.config');
const postRoutes = require ('./controllers/postController');
const app = express();
mongoose.set('useFindAndModify', false);



app.use(parser.json());
app.use('/posts', postRoutes);

app.listen(4000, () => {
    console.log('connection réussi : 4000');
})