/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import Header from "../components/Header";
import ToDoList from "../components/ToDoList";

import ToDoCreate from "../components/ToDoCreate";
import ToDoComputed from "../components/ToDoComputed";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
// import { useNavigate, Link } from "react-router-dom";

import fetchTasksFromUser from "../services/fetchTasksFromUser";

import { loadUserTasks } from "../redux/userSlice";

import { useRedirectActiveUser } from "../services/useRedirectActiveUser";
import fetchDeleteTask from "../services/fetchDeleteTask";
import fetchIsCompletedTask from "../services/fetchUpdateTask";
import ToDoFilter from "../components/ToDoFilter";
import Pagination from "../components/Pagination";



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

    const navigate = useNavigate();

    // Paginación
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);


    useEffect(() => {
        if(isLogged){          
            
            fetchTasksFromUser(currentPage, itemsPerPage)
            .then(resp => {    
                console.log("TASKS", resp)          
                dispatch(loadUserTasks(resp.docs))
            })
            .catch(err => console.log(err));
                //ACA CAMBIÉ EL FETCH A LAS TAREAS DEL USUARIO (AHORA LO HACEMOS DE FORMA INDEPENDIENTE A LA INFO DEL USUARIO, PARA TENER LA POSIBILIDAD DE PAGINAR
                // LA LLAMADA A PROFILE SE HACE CUANDO SE LOGUEA
    
        } else {
            navigate('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogged, currentPage, itemsPerPage]);

    // Debugging Completed Tasks
    // console.log(tasks)
    // console.log(completedTasks)


    // Funcionalidad para actualizar tareas
    const setIsCompleted = (id, taskTitle, taskDescription, taskDeadline, isCompleted) => {
        console.log('click en updateTodo', id)
        return fetchIsCompletedTask(id, taskTitle, taskDescription, taskDeadline, isCompleted)
        .then(resp => {
            if(resp.status === 200){
                console.log("Updated Tasks!", resp)
                fetchTasksFromUser()
                .then(resp => {    
                    console.log("Update TASKS", resp)          
                    dispatch(loadUserTasks(resp.docs))
                })
                .catch(err => console.log(err)); 
            }
        })
    };


    const removeTodo = (id) => {
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

    // Funcionalidad de Prioridad
    /* const priorityTodo = (id) => {
        console.log("click en DAR PRIORIDAD en tarea", id)
    }; */

    // Función/filtro para saber cantidad(number) de tareas NO completadas
    const computedItemsLeft = tasks.filter(task => !task.isCompleted).length
    console.log(computedItemsLeft)

    // Función para eliminar las tareas completadas
    const clearCompleted = () => {
        const completedTasks = tasks.filter(task => task.isCompleted);
        
        if(completedTasks.length > 0) {
            completedTasks.forEach(task => {
                console.log('El id de las tareas completadas: ' + task._id)
                removeTodo(task._id);  // Llama a la función removeTodo para cada tarea completada
            });
        } else {
            console.log("No hay tareas completadas para eliminar");
        }
    };
    
    // Función de filtrado de tareas
    const [taskFilter, setTaskFilter] = useState('all');

    const filteredTasks = () => {
        switch(taskFilter) {
            case 'all':
                return tasks;
            case 'active':
                return tasks.filter((task) => !task.isCompleted);
            case 'completed':
                return tasks.filter((task) => task.isCompleted);
            default:
                return tasks;
        }
    };

    const changeFilter = (taskFilter) => {setTaskFilter(taskFilter)};
    

    return (
        <div className="w-full bg-[url('./assets/img/remoteWork.jpeg')] bg-cover bg-no-repeat bg-center h-[200px] mt-5 mb-[100%] flex flex-col items-center ">
            {/* Header */}
            <Header />
            
            {/* Cuerpo de la APP */}
            <main className="container mx-auto mt-6 px-4">
                {/* Boton para Creacion de Tarea Nueva */}
                <Button variant="contained" style={{ border: '1px solid #afa5a5', boxShadow: 'none', cursor: 'pointer', backgroundColor: '#686060'}} sx={{ textAlign:'center', ml:10, mt:1}}>
                    <NavLink to='/user/todoCreation'>Create new task</NavLink>
                </Button>

                
                {/* Lista de Tareas */}
                <div className="rounded-md bg-white mt-10">
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} hasMorePages={tasks.length === itemsPerPage}/>
                    <ToDoList /* todos={tasks} */ todos={filteredTasks()} setIsCompleted={setIsCompleted} removeTodo={removeTodo} /* priorityTodo={priorityTodo} *//>
                    
                    {/* Operaciones Computadas */}
                    <ToDoComputed todos={tasks} computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted}/>
                    
                </div>
                
                {/* Selector de filtros */}
                {/* <section className="container mx-auto px-4 mt-8">
                    <div className="flex justify-around rounded-md bg-white p-4 ">
                        <button className="text-blue-600">All</button>
                        <button className="text-gray-400 hover:text-blue-600">Active</button>
                        <button className="text-gray-400 hover:text-blue-600">Completed</button>
                    </div>
                </section> */}
                <ToDoFilter changeFilter={changeFilter} taskFilter={taskFilter}/>
            </main>
        </div>
    )
};

export default Home;