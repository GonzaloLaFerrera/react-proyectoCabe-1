export const fetchCreateTodo = (title, description, deadline) => {

    return fetch(`http://localhost:3000/user/tasks/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
            taskTitle: task.title,
            taskDescription: task.description,
            isCompleted: task.isCompleted,
            taskDeadline: task.deadline,
        }),
    })
}