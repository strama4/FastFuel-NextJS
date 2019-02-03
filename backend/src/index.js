require('dotenv').config();
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();


// TODO Use express middleware to handle cookies (JWT)
// TODO Use express middleware to populate user

server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL,
    }
 }, deets => {
    console.log(`Server is running on http://localhost:${deets.port}`)
})