const fetchTasksFromUser = (page = 1, limit = 5, filter) => {

    const active = filter === "active" ? "true" : filter === "completed" ? "false" : null
    
    return fetch(`http://localhost:3000/user/tasks?page=${page}&limit=${limit}&active=${active}`, {
        credentials: 'include'
    })
    .then((data) => data.json());
}

export default fetchTasksFromUser;