import { useEffect, useState } from "react";

import Header from "../components/Header";
import ToDoList from "../components/ToDoList";

import ToDoCreate from "../components/ToDoCreate";
import ToDoComputed from "../components/ToDoComputed";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import fetchUser from "../services/fetchUser";
import {loadUserTasks} from "../redux/userSlice";

import { useRedirectActiveUser } from "../services/useRedirectActiveUser";



const initialExampleTodos = [
    {
        id:1,
        title:'Preparar el desayuno',
        complete:false
    },
    {
        id:2,
        title:'Salir a comprar la fruta',
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

    const navigate = useNavigate();
    
    // ESTADOS GLOBALES
    const {isLogged} = useSelector((state) => state.isLogged)
    const tasks = useSelector((state) => state.user.tasks)

    const dispatch = useDispatch();


    useEffect(() => {
        if(isLogged){
            fetchUser()
            .then(resp => {
                console.log('el console del logueo en HOME', resp, isLogged)
                
                dispatch(loadUserTasks(resp.tasks))
                
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogged])


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

    console.log(tasks)
    

    return (
        <div className="h-[250px] w-full bg-[url('./assets/img/remoteWork.jpeg')] bg-cover bg-no-repeat bg-bottom mt-6">
            {/* Header */}
            <Header />
            

            {/* Cuerpo de la APP */}
            <main className="container mx-auto mt-8 px-4">
                <ToDoCreate createNewTodo={createNewTodo}/>
                
                <div className="rounded-md bg-white mt-8">
                    <ToDoList todos={tasks} updateTodo={updateTodo} removeTodo={removeTodo}/>
                    
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
        </div>
    )
};

export default Home;