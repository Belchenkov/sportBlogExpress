const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('categories', {
        title: 'Categories'
    });
});


router.get('/', (req, res, next) => {
    res.send('Categories');
});

module.exports = router;