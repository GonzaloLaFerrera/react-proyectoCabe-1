//ESTO ESTA RE VERDE!!!!

export const fetchUser = () => {

    useEffect(() => {
        if(user){
            fetch("http://localhost:3000/user/profile", {
                credentials: 'include'
            })
            .then(data => data.json())
            .then(resp => {
                console.log("estoy en useEffect", resp)
                setTodos(resp.tasks)
            }
            )
        }
    }, [user])
}

export const getDataStorage = async() => {
    try {
        const dataUser = await fetch("http://localhost:3000/user/profile"), {
            credentials
        }
    }
}

// Un POST a login.jsx