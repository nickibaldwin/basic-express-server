'use strict';

//TODO 404 on a bad route
//TODO 404 on a bad method

module.exports = (req, res, next) => {
    res.status(404).json({ msg: 'not found' });
    next();
}