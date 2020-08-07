const express = require('express');
const router = express.Router();

// load controllers
const { getPostsOrGetPostAndComments } = require('./../controller/post');
/*..........................................Routes for accessing related data................................................................*/

/* ..... Get      /Posts Or GetPostComment ....... */
router.get('/', getPostsOrGetPostAndComments);

module.exports = router;