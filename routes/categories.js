const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

Category = require('../models/category');

router.get('/', (req, res, next) => {

    Category.getCategories((err, categories) => {
        if (err) {
            res.send(err);
        }
       
        res.render('categories', {
            title: 'Categories',
            categories: categories
        });
    });

    
});


router.get('/', (req, res, next) => {
    res.send('Categories');
});

module.exports = router;