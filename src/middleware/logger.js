'use strict';

//TODOPerforms a console.log with the request method and path
//TODO Import this into your server and set it up to run at the application level for all routes

const logger = (req, res, next) => {
    console.log('Request Data: ', req.method, req.path);
    next();
}

module.exports = logger;