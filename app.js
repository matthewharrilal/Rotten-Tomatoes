const express = require('express');
const app = express()
var exphbs = require('express-handlebars')
var mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/rotten_potatoes", {
    useMongoClient: true
});

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

// Creating our model
const Review = mongoose.model('Review', {
    title: String
})


app.get('/', (req, res) => {
    Review.find().then(reviews => {
        res.render('reviews-index', {
            reviews: reviews
        });
    }).catch(err => {
        console.log(err);
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});
