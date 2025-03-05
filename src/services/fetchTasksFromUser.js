const fetchTasksFromUser = (page = 1, limit = 5, taskFilter, orderByTaskDeadline, taskPriorityFilter) => {
    
    return fetch(`http://localhost:3000/user/tasks?page=${page}&limit=${limit}&active=${taskFilter}&deadline=${orderByTaskDeadline}&priority=${taskPriorityFilter}`, {
        credentials: 'include'
    })
    .then((data) =>{

        return data.json()
    } );
}

export default fetchTasksFromUser;
