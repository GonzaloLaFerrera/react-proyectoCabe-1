export const fetchCreateTodo = (title, description, deadline) => {

    return fetch(`http://localhost:3000/user/tasks/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
            title: title,
            description: description,
            deadline: deadline
        }),
    })
}