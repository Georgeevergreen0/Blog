const { getAllPosts } = require("./../model/posts");
const { getPostAndComments } = require("./../model/postAndComments");


exports.getPostsOrGetPostAndComments = async (req, res, next) => {
    const postId = req.query.postId;
    try {
        if (postId) {
            const postAndComments = await getPostAndComments(postId);
            res.send(postAndComments);
        } else {
            const post = await getAllPosts();
            res.send(post);
        }
    } catch (error) {
        next(error)
    }
};