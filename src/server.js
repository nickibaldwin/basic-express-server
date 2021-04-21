'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('WEB SERVER:', () => {

    it('should respond with a 404 on not found', async() => {
        return mockRequest.get('/no-thing').then(data => {
            expect(data.status).toBe(404);
        });
    });

    it('should respond with a 500 on an error', () => {
        return mockRequest.get('/no-thing').then(data => {
            expect(data.status).toBe(500);
        });
    });

    it('should respond properly to a GET: /hello', async() => {
        const response = await mockRequest.get('/hello');
        expect(response.status).toBe(200);
        expect(response.text).toBe('hello world!');
    });
}) next('not a string!');
}
else {
    next();
}
}
}

app.use('*', notFound);
app.use(errors);
app.use(logger);


module.exports = {
    server: app,
    start: port => {
        app.listen(port, () => {
            console.log(`server up: ${port}`)
        });
    }
}