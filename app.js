const express = require('express');
const app = express()
var exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Our mock array of projects
var reviews = [{
    title: 'Great Movie'
}, {
    title: 'Will See Again'
}]

app.get('/', (req,res) => {
    res.render('reviews-index', {
        reviews: reviews
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});
