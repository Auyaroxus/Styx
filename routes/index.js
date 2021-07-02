const express = require('express');

const indexController = require('../controllers/index');

const router = express.Router();

//! GET /
router.get('/', indexController.getIndex);

//! GET /about us
router.get('/aboutus', indexController.getAboutUs);

//! GET /gallery
router.get('/gallery', indexController.getGallery);

//!GET /login
router.get('/login', indexController.getLogin);

//! GET /members
router.get('/members', indexController.getMembers);

//! GET /performances
router.get('/performances', indexController.getPerformances);

//! GET /repertoar
router.get('/repertoar', indexController.getRepertoar);


module.exports = router;