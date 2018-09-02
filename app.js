const express = require('express');
const app = express()
var exphbs = require('express-handlebars')
var mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/rotten_potatoes");

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Our mock array of projects
var reviews = [{
    title: 'The Titanic',
    review: 'Great movies makes me cry all the time.'
}, {
    title: 'Good Will Hunting',
    review: 'Excellent movie really represents culture.'
}]


app.get('/', (req,res) => {
    res.render('reviews-index', {
        reviews: reviews
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});
