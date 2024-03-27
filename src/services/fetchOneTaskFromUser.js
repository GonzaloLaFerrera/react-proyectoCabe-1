



const fetchOneTaskFromUser = (id) => {
    return fetch(`http://localhost:3000/user/tasks/${id}`, {
        credentials: 'include'
    })

}

export default fetchOneTaskFromUser;