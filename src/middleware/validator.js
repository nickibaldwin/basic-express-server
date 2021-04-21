'use strict';

//TODO Checks the query string for a name property
//TODO Sends the request through when valid, forces an error when not

const validator = (req, res, next) => {
    console.log('Request Data: ', req.method, req.path);
    next();
}

module.exports = validator;