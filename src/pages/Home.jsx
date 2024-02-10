import { useState } from "react";

import Header from "../components/Header";
import ToDoList from "../components/ToDoList";

import ToDoCreate from "../components/ToDoCreate";
import ToDoComputed from "../components/ToDoComputed";
import { UseUserContext } from "../context/UserContext";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const initialExampleTodos = [
    {
        id:1,
        title:'Preparar el desayuno',
        complete:false
    },
    {
        id:2,
        title:'Regar las plantas',
        complete:true
    },
    {
        id:3,
        title:'Alimentar a las gatas',
        complete:true
    }
];


const Home = () => {

    const [todos, setTodos] = useState(initialExampleTodos); 
    const { user, setUser } = UseUserContext();

    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(false)
        navigate('/')
    };

    const createNewTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
            complete:false,
        };
        setTodos([...todos, newTodo]);
    };

    const updateTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, complete:!todo.complete} : todo));
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const computedItemsLeft = todos.filter(todo => !todo.complete).length;
    

    return (
        <div className="min-h-screen bg-slate-400 bg-contain bg-no-repeat">
            {/* Header */}
            <Header />
            

            {/* Cuerpo de la APP */}
            <main className="container mx-auto mt-8 px-4">
                <ToDoCreate createNewTodo={createNewTodo}/>
                
                <div className="rounded-md bg-white mt-8">
                    <ToDoList todos={todos} updateTodo={updateTodo} removeTodo={removeTodo}/>
                    
                    {/* Operaciones Computadas */}
                    <ToDoComputed computedItemsLeft={computedItemsLeft}/>
                    
                </div>
                
                {/* Selector de filtros */}
                <section className="container mx-auto px-4 mt-8">
                    <div className="flex justify-around rounded-md bg-white p-4 ">
                        <button className="text-blue-600">All</button>
                        <button className="text-gray-400 hover:text-blue-600">Active</button>
                        <button className="text-gray-400 hover:text-blue-600">Completed</button>
                    </div>
                </section>
            </main>

            <p className="text-white text-center mt-8">Drag and Drop to re-order list</p>
            {
                user && (
                    <>
                        <p>Usuario Logueado!</p>
                        <Button onClick={() => setUser(false)}>Logout</Button>
                        <Button onClick={handleLogout}>Logout2</Button>
                    </>
                )
            }
        </div>
    )
};

export default Home;