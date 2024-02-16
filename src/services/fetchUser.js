const fetchUser = () => {
    return fetch("http://localhost:3000/user/profile", {
        credentials: 'include'
    })
    .then((data) => data.json())

}

export default fetchUser;