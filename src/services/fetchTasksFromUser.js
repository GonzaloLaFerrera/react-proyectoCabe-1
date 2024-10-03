const fetchTasksFromUser = (page = 1, limit = 5) => {
    
    return fetch(`http://localhost:3000/user/tasks?page=${page}&limit=${limit}`, {
        credentials: 'include'
    })
    .then((data) => data.json());
}

export default fetchTasksFromUser;