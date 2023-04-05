const path = require('path')
const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const app = express();
//aws
const AWS = require('aws-sdk');
let S3 = new AWS.S3({
    region: 'us-east-1',
    accessKeyId: 'AKIASHZWWJEY4RKHBKVM',
    secretAccessKey: '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'
})
S3.createBucket({
    Bucket: 'demo-bucket-created'
},(err)=>{
    console.log("err: ",err)
})
//config routes
const route = require('./resources/routes')
// static store img
app.use(express.static(path.join(__dirname,'public')));
//HTTP logger
app.use(morgan('combined'))
//template engine
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));

route(app);


app.listen(3000);