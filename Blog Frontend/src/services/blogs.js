import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const setToken = (newToken) => {
    token = 'bearer ' + newToken
}

const createNew = (blogObject) => {
    const config = {
        headers: {'Authorization': token}
    }
    const request = axios.post(baseUrl, blogObject, config)
    return request.then(response => response.data)
}

const addLike = async (blogId) => {
    const blog = (await axios.get(baseUrl + '/' + blogId).then(response => response.data))[0]
    console.log('get call blog:', blog)
    const likedBlog = {
        user: blog.user._id,
        likes: blog.likes + 1,
        author: blog.author,
        title: blog.title,
        url: blog.url
    }
    const config = {
        headers: {'Authorization': token}
    }
    const request = axios.put(baseUrl + '/' + blogId, likedBlog, config)
    return request.then(response => response.data)
}

const deleteBlog = (blogId) => {
    const config = {
        headers: {'Authorization': token}
    }
    const request = axios.delete(baseUrl + '/' + blogId, config)
    return request.then(response => response.data)
}

export default { getAll, setToken, createNew, addLike, deleteBlog }
