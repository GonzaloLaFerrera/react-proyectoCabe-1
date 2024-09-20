// Antes de devolver promesa
/* export const taskCreation = (title, description, deadline, priority) => {
    fetch("http://localhost:3000/user/tasks/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
            title: title,
            description: description,
            deadline: deadline,
            priority: priority
        }),
    });
} */

// Usando el .then acá! (FUNCIONA!)
export const taskCreation = (title, description, deadline, priority) => {
    return fetch("http://localhost:3000/user/tasks/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
            title: title,
            description: description,
            deadline: deadline,
            isPriority: priority,
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response;
    });
}
