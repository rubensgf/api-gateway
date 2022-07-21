
const http = require('http');
const express = require('express');
const httpProxy = require('express-http-proxy');
const dotenv = require('dotenv');
dotenv.config()

const app = express();

const options = {
    proxyReqPathResolver: (req) => {
        return req.originalUrl;
    }
}

console.log('options',options);

const checkoutServiceProxy = httpProxy(`${process.env.CHECKPOINT_API}`);
const gtwServiceProxy = httpProxy(`${process.env.GTW_API}`, options);

app.use('/checkpoint',checkoutServiceProxy);
app.get('/gtw', gtwServiceProxy);

console.log('asfasf',process.env.DOCKER_PORT);

app.listen(process.env.DOCKER_PORT, () => {
    console.log(`API Gateway running at ${process.env.DOCKER_PORT}`);
});