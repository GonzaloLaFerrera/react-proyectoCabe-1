// eslint-disable-next-line no-unused-vars
const fetchTasksFromUser = (page = 1, limit = 5, taskFilter, orderByTaskDeadline, taskPriorityFilter) => {

    // const active = filter === "active" ? "true" : filter === "completed" ? "false" : "all"

    // const deadline = orderByTaskDeadline || "none";

    // const priority = taskPriorityFilter || "off";

    // console.log("fetchTask", deadline, priority)

    // eslint-disable-next-line no-undef

    // http://localhost:3000/user/tasks?page=1&limit=20&active=all&deadline=desc&priority=true

    // http://localhost:3000/user/tasks?page=1&limit=5&active=all&deadline=none&priority=off
    // http://localhost:3000/user/tasks?page=${page}&limit=${limit}&active=${active}&deadline=${deadline}&priority=${priority}

    console.log(taskPriorityFilter)
    
    return fetch(`http://localhost:3000/user/tasks?page=${page}&limit=${limit}&active=${taskFilter}&deadline=${orderByTaskDeadline}&priority=${taskPriorityFilter}`, {
        credentials: 'include'
    })
    .then((data) =>{
        console.log("LA CONCHA DE TU MADREEE")

        return data.json()
    } );
}

export default fetchTasksFromUser;
