


const fetchDeleteTask = (id) => {
    return fetch(`http://localhost:3000/user/tasks/${id}`, {
        method: 'DELETE',
        credentials: 'include'
    })

}

export default fetchDeleteTask;