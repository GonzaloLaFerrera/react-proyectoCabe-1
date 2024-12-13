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
    const [hasNextPage, setHasNextPage] = useState();
    const [hasPrevPage, setHasPrevPage] = useState();
    const [totalPages, setTotalPages] = useState();


    useEffect(() => {
        if(isLogged){          
            
            fetchTasksFromUser(currentPage, itemsPerPage)
            .then(resp => {    
                console.log("TASKS", resp)
                console.log("testing total tasks: ", resp.totalDocs)
                setHasNextPage(resp.hasNextPage)
                setHasPrevPage(resp.hasPrevPage)
                setTotalPages(resp.totalPages)
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
    const setIsCompleted = (id, taskTitle, taskDescription, taskDeadline, isCompleted, isPriority) => {
        console.log('click en updateTodo', id)
        return fetchIsCompletedTask(id, taskTitle, taskDescription, taskDeadline, isCompleted, isPriority)
        .then(resp => {
            if(resp.status === 200){
                console.log("Updated Tasks!", resp)
                fetchTasksFromUser(currentPage, itemsPerPage) // Agregue los parametros de paginación para que labure con la página actual
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

     
    // Ordenamiento de tareas por Prioridad
    const sortedTasks = [...filteredTasks()].sort((a,b) => {
        
        if(a.isPriority && !b.isPriority) return -1; //tendría prioridad 'a'
        
        if(!a.isPriority && b.isPriority) return 1; //tendría prioridad 'b'

        return 0; //no habría cambio de prioridad
    });
    

    return (
        <div className="w-full bg-[url('./assets/img/remoteWork.jpeg')] bg-cover bg-no-repeat bg-center h-[200px] mt-5 flex flex-col items-center sm:bg-[url('./assets/img/pexels-pixabay-434337.jpg')] sm:bg-cover sm:h-[220px] lg:m-0 lg:mt-8">
            {/* Header */}
            <Header />
            
            {/* Cuerpo de la APP */}
            <main className="container mx-auto mt-6 px-4 flex flex-col justify-center gap-2 sm:gap-20 lg:gap-2 lg:mt-4 lg:mx-0">
                {/* Boton para Creacion de Tarea Nueva */}
                <Button variant="contained" style={{ border: '1px solid #afa5a5', cursor: 'pointer', backgroundColor: '#686060'}} sx={{ textAlign:'center', marginTop:{xs:2, sm:2, md:6}, marginX: {sm:22,md:'auto', lg:'auto'}, width:{md: '40%',lg:'25%'}, boxShadow:{lg:3} }}>
                    <NavLink to='/user/todoCreation'>Create new task</NavLink>
                </Button>

                
                {/* Lista de Tareas */}
                <div className="rounded-md bg-white mt-10 lg:mt-20 lg:w-[50%] lg:mx-auto">
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} hasNextPage={hasNextPage} hasPrevPage={hasPrevPage} totalPages={totalPages} /* hasMorePages={tasks.length === itemsPerPage} */ /* hasMorePages={tasks.length > itemsPerPage} *//>
                    <ToDoList /* todos={tasks} */ /* todos={filteredTasks()} */ todos={sortedTasks} setIsCompleted={setIsCompleted} removeTodo={removeTodo} /* priorityTodo={priorityTodo} *//>
                    
                    {/* Operaciones Computadas */}
                    <ToDoComputed todos={tasks} computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted}/>
                    
                </div>
                
                {/* Selector de filtros */}
                <ToDoFilter changeFilter={changeFilter} taskFilter={taskFilter}/>
            </main>
        </div>
    )
};

export default Home;