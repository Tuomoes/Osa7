let token = null

const user = {
    name: "Timo Harakka",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRpbXBwYTg0IiwiaWQiOiI1YjViMGFlMWQ5ZGM0MzQzMjQ4ZDM5ZWQiLCJpYXQiOjE1MzQ0ODc0MjR9.SMLG8u6X4cICGC60I38BV1vRXDKkdgGFx-N0lFE9tII",
    username: "Timppa82"
}

const login = () => {
    console.log('MOCK LOGIN CALLED!!!!!!!!!!!!!!')
    return Promise.resolve(user)
}

export default { login, user }
