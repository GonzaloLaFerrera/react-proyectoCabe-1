const fetchEditTask = (id, title, description, deadline, isCompleted, priority) => {
    return fetch(`http://localhost:3000/user/tasks/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            taskTitle: title,
            taskDescription: description,
            isCompleted: isCompleted,
            taskDeadline: deadline,
            isPriority: priority
        })
    })
};

export default fetchEditTask;