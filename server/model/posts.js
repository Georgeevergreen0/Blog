const axios = require('axios').default;

exports.getAllPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data
}