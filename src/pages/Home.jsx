/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import Header from "../components/Header";
import ToDoList from "../components/ToDoList";

import ToDoCreate from "../components/ToDoCreate";
import ToDoComputed from "../components/ToDoComputed";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
// import { useNavigate, Link } from "react-router-dom";

import fetchTasksFromUser from "../services/fetchTasksFromUser";

import { loadUserTasks } from "../redux/userSlice";

import { useRedirectActiveUser } from "../services/useRedirectActiveUser";
import fetchDeleteTask from "../services/fetchDeleteTask";



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
        title:'Alimentar a los gaturros',
        complete:true
    }
];


const Home = () => {

    const [todos, setTodos] = useState(initialExampleTodos); 
    
    // ESTADOS GLOBALES
    const {isLogged} = useSelector((state) => state.isLogged)
    const {tasks} = useSelector((state) => state.user)

    const dispatch = useDispatch();


    useEffect(() => {
        if(isLogged){
            // fetchUser()
            // .then(data => {
            //     console.log("USER", data)
            //     dispatch(loadUser(data));
                
            // })
            // .catch(err => console.log(err));
            
            
            fetchTasksFromUser()
            .then(resp => {    
                console.log("TASKS", resp)          
                dispatch(loadUserTasks(resp.docs))
            })
            .catch(err => console.log(err));
                //ACA CAMBIÉ EL FETCH A LAS TAREAS DEL USUARIO (AHORA LO HACEMOS DE FORMA INDEPENDIENTE A LA INFO DEL USUARIO, PARA TENER LA POSIBILIDAD DE PAGINAR
                // LA LLAMADA A PROFILE SE HACE CUANDO SE LOGUEA
    
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogged]);


    /* const createNewTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
            complete:false,
        };
        setTodos([...todos, newTodo]);
    }; */

    /* const updateTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, complete:!todo.complete} : todo));
    }; */

    const updateTodo = (id) => {
        console.log('click en updateTodo',id)
    }

    const removeTodo = (id) => {
        // setTodos(todos.filter(todo => todo.id !== id));
        console.log("click en eliminar tarea", id)
        fetchDeleteTask(id)
        .then(resp => {
            if(resp.status === 200){
                fetchTasksFromUser()
                .then(resp => {    
                    console.log("Update TASKS", resp)          
                    dispatch(loadUserTasks(resp.docs))
                })
                .catch(err => console.log(err)); 
            }
        });
    };

    const computedItemsLeft = todos.filter(todo => !todo.complete).length;
    

    return (
        <div className="w-full bg-[url('./assets/img/remoteWork.jpeg')] bg-cover bg-no-repeat bg-center h-[200px] mt-10 mb-[100%] flex flex-col items-center ">
            {/* Header */}
            <Header />
            

            {/* Cuerpo de la APP */}
            <main className="container mx-auto mt-8 px-4">
                {/* Boton de Prueba para Creacion de Tarea Nueva */}
                <Button variant="contained" style={{ border: '1px solid #afa5a5', boxShadow: 'none', cursor: 'pointer', backgroundColor: '#686060'}} sx={{ textAlign:'center', ml:10, mt:1}}>
                    <NavLink to='/user/todoCreation'>Crear nueva tarea</NavLink>
                </Button>

                {/* <ToDoCreate createNewTodo={createNewTodo}/> */}
                
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


            {/* Gonza, este botón en realidad tiene que ser la tarea, asi que lo muevo

            <p className="text-white text-center mt-8">Drag and Drop to re-order list</p>
            <button className="h-20 w-20 rounded-md bg-blue-500 text-white mt-4 px-6 py-4 ">
                    <Link to={'/user/taskDetail'}>Task Detail</Link>
            </button> */}
        </div>
    )
};

export default Home;