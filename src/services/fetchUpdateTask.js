const fetchIsCompletedTask = (id, taskTitle, taskDescription, isCompleted, taskDeadline, isPriority) => {
    return fetch(`http://localhost:3000/user/tasks/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({
            taskTitle: taskTitle,
            taskDescription: taskDescription,
            isCompleted: !isCompleted,
            taskDeadline: taskDeadline,
            isPriority: isPriority
        })
    })
};

export default fetchIsCompletedTask;

// Agregado isPriority de prueba como parámetro y credentials 