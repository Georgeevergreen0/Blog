import { instance as axios } from "Services";

export const getPost = async (postId) => {
    const post = await axios.get(`/posts`, { params: { postId } });
    return post.data;
}