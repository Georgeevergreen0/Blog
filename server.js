// load ENV
require('dotenv').config();

//load dependencies
const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

//configure server
const port = process.env.SERVER_PORT || 5000;

//mount middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet())
app.use(cors());

//load routes
const postsRouter = require('./server/routes/posts');


//mount routes
app.use('/posts', postsRouter);


// catch all 404 and redirect to posts page
app.use((req, res, next) => {
    res.redirect(404, '/posts');
});

//catch error all error
app.use((err, req, res, next) => {
    res.status(500).send("Internal Server Error");
});

app.listen(port, () => console.log(`Baretto Creative server is running @ http://localhost:${port}`));
