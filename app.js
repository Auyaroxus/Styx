const express = require('express');
const path = require('path');

const db = require('./util/database');

const app = express();

//* imports
const homeRoutes = require('./routes/index');

//* Pug engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//* css,js,...
app.use(express.static(path.join((__dirname, 'public'))));

app.use(homeRoutes);


//* Error 
app.use((req, res) => {
    // res.status(404).sendFile(__dirname, 'views', '404.html');
    res.status(404).render('404', {
        pageTitle: 'Stránka nenalezena'
    });
});

app.listen(3000);