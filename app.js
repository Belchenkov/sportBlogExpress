const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const mongoose = require('mongoose');

// Init app
const app = express();

const port = '3000';

// Mongoose Connect 
mongoose.connect('mongodb://belchenkov:mongomaster88@ds133922.mlab.com:33922/sportblog');

const index = require('./routes/index');
const articles = require('./routes/articles');
const categories = require('./routes/categories');
const manage = require('./routes/manage');


// View Setup 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Moment
app.locals.moment = require('moment');

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));

// Express Messages
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});


// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));


app.use('/', index);
app.use('/articles', articles);
app.use('/categories', categories);
app.use('/manage', manage);


app.listen(port, () => {
    console.log('Server running on localhost:' + 3000);
});