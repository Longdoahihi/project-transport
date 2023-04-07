const path = require('path')
const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const app = express();
//config routes
//_moduleAlias
require('module-alias/register')
// const route = require('./resources/routes')
const route = require('./routes')
// static store img
app.use(express.static(path.join(__dirname, 'public')));
//HTTP logger
app.use(morgan('combined'))
//template engine
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

route(app);


app.listen(3000);