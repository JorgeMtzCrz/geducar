import axios from 'axios'

const baseURL = process.env.REACT_APP_URL
const service = axios.create({
    baseURL,
    withCredentials: true
})

const JSON_SERVICE = {
    USERS: () => service.get('/users'),
    POSTS: (idUser) => service.get(`/users/${idUser}/posts`),
    COMMENTS: (idPost) => service.get(`/posts/${idPost}/comments`),

}

export default JSON_SERVICE