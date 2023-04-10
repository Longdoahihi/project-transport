//aws
const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    region: process.env.AWS_DEFAULT_REGION,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});


const dynamoClient = new AWS.DynamoDB.DocumentClient();


module.exports = dynamoClient;