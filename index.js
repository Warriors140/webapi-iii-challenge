// code away!

const express = require('express');

const server = express();
const postRouter = require('./posts/postRouter');
const userRouter = require('./users/userRouter');
const serverRouter = require('./server');


server.use(express.json());

server.use('/', serverRouter)
server.use('/api/users', userRouter);
server.use('/api/posts', postRouter);


server.listen(5000, () => {
    console.log('Server is running on port 5000...');
});