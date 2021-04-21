'use strict';

const dotenv = require('dotenv');
const server = require('./src/server.js');

dotenv.config();

const PORT = process.env.PORT || 3333;

server.start(PORT);