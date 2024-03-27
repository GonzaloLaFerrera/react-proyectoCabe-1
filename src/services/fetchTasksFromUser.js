

const fetchTasksFromUser = () => {
    
    return fetch("http://localhost:3000/user/tasks/", {
        credentials: 'include'
    })
    .then((data) => data.json());
}

export default fetchTasksFromUser;