export const userRegister = (firstName, lastName, email, password) => {
    return fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }),
    });
};