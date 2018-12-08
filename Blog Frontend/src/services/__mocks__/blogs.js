let token = null

const setToken = (newToken) => {
    token = 'bearer ' + newToken
}

const blogs = [
    {
        _id: '5b5b0923eacf4426b0fe45bb',
        user: {
            _id: '5b5b090ceacf4426b0fe45ba',
            username: 'Timppa82',
            name: 'user.name'
        },
        likes: 18542347,
        author: 'time',
        title: 'timen bloki',
        url: 'http://yle.fi'
    },
    {
        _id: '5b5b0af4d9dc4343248d39ee',
        user: {
            _id: '5b5b0ae1d9dc4343248d39ed',
            username: 'Timppa84',
            name: 'user.name'
        },
        likes: 18542346,
        author: 'time',
        title: 'timen bloki2',
        url: 'http://yle.fi'
    }
]

const getAll = () => {
    return Promise.resolve(blogs)
}

export default { getAll, setToken, blogs }
