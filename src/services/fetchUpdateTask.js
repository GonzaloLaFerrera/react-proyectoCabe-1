const fetchIsCompletedTask = (id, taskTitle, taskDescription, taskDeadline, isCompleted) => {
    return fetch(`http://localhost:3000/user/tasks/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            taskTitle: taskTitle,
            taskDescription: taskDescription,
            isCompleted: !isCompleted,
            taskDeadline: taskDeadline,
        })
    })
};

export default fetchIsCompletedTask;