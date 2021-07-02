const Performance = require('../models/performance');
const User = require('../models/users');
const Gallery = require('../models/gallery');

exports.getIndex = (req, res) => {
    Performance.fetchAllIndex()
    .then(([data]) => {
        res.render('index', {
            perf: data,
            pageTitle: 'Taneční skupina styx'
        });
        console.log(data.length);
    })
    .catch(err => {
        console.log(err);
    });
};

exports.getAboutUs = (req, res) => {
    res.render('aboutus', {
        pageTitle: 'O nás',
    });
};

exports.getGallery = (req, res) => {
        Gallery.fetchAll()
        .then(([data]) => {
            console.log(data);
            res.render('gallery', {
                pageTitle: 'Galerie',
                pic: data
            });  
        })
        .catch(err => {
            console.log(err);
        })
};

exports.getLogin = (req, res) => {
    res.render('login', {
        pageTitle: 'Přihlášení',
    });
};

exports.getMembers = (req, res) => {
    User.fetchAll()
    .then(([data]) => {
        res.render('members', {
            user: data,
            pageTitle: 'Členové',
        });
    })
    .catch(err => {
        console.log(err);
    });
};

exports.getRepertoar = (req, res) => {
    res.render('repertoar', {
        pageTitle: 'Repertoár',
    });
};

exports.getPerformances = (req, res) => {
    Performance.fetchAll()
    .then(([data]) => {
        res.render('performances', {
            pageTitle: 'Vystoupení',
            perf: data
        });
    })
    .catch(err => {
        console.log(err);
    })
};
