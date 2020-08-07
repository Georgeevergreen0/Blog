const axios = require('axios').default;

exports.getPostAndComments = async (postId) => {
    const [post, comments] = await Promise.all([axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`), axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)])
    return { post: post.data, comments: comments.data }
}