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
    const [totalPages, setTotalPages] = useState();
    const [hasNextPage, setHasNextPage] = useState();
    const [hasLastPage, setHasLastPage] = useState();


    // Función de filtrado de tareas
    const [taskFilter, setTaskFilter] = useState('all');
    const [taskPriorityFilter, setTaskPriorityFilter] = useState("off");
    const [orderByTaskDeadline, setOrderByTaskDeadline] = useState("none");

    // const tasksFilterValues = ["all", "false", "true"]
    const priorityFilterValues = ["off", "true", "false"];
    const taskDeadlineFilterValues = ["none", "asc", "desc"];

    const handlePriorityFilter = (e) => {
        
        const currentIndex = priorityFilterValues.findIndex(el => el === taskPriorityFilter);
        let nextPriorityFilter = currentIndex < 2 ? currentIndex + 1 : 0;
        setTaskPriorityFilter(priorityFilterValues[nextPriorityFilter])
       
    } 

    const handleOrderByTaskDeadline = () => {
        const currentIndex = taskDeadlineFilterValues.findIndex(el => el === orderByTaskDeadline);
        let nextOrderByTaskDeadlineSort = currentIndex < 2 ? currentIndex + 1 : 0;
        setOrderByTaskDeadline(taskDeadlineFilterValues[nextOrderByTaskDeadlineSort])
    }

    // const filteredTasks = () => {
    //     switch(taskFilter) {
    //         case 'all':
    //             return setTaskFilter(taskFilter);
    //         case 'active':
    //             return setTaskFilter(taskFilter);
    //         case 'completed':
    //             return setTaskFilter(taskFilter);
    //         default:
    //             return tasks;
    //     }
    // };

    const changeFilter = (taskFilter) => {setTaskFilter(taskFilter)};


    
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
                fetchTasksFromUser(currentPage, itemsPerPage, taskFilter, orderByTaskDeadline, taskPriorityFilter)
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
                fetchTasksFromUser(currentPage, itemsPerPage, taskFilter, orderByTaskDeadline, taskPriorityFilter)
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



     
    // Ordenamiento de tareas por Prioridad
    // const sortedTasks = [...filteredTasks()].sort((a,b) => {
        
    //     if(a.isPriority && !b.isPriority) return -1; //tendría prioridad 'a'
        
    //     if(!a.isPriority && b.isPriority) return 1; //tendría prioridad 'b'

    //     return 0; //no habría cambio de prioridad
    // });

    useEffect(() => {
        if(isLogged){   
            
            fetchTasksFromUser(currentPage, itemsPerPage, taskFilter, orderByTaskDeadline, taskPriorityFilter) // 
            .then(resp => {  

                setHasNextPage(resp.hasNextPage)
                setHasLastPage(resp.hasPrevPage)
                  
                console.log("TASKS", resp)  
                setTotalPages(resp.totalPages)
                

                if(totalPages < currentPage){
                    setCurrentPage(1)
                }
                 
                dispatch(loadUserTasks(resp.docs))
            })
            .catch(err => console.log(err));
    
        } else {
            navigate('/')
        }
        //AGREGUÉ LOS NUEVOS ESTADOS
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogged, currentPage, itemsPerPage, taskFilter, taskPriorityFilter, orderByTaskDeadline, totalPages ]); // 

    

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

                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} hasNextPage={hasNextPage} hasLastPage={hasLastPage} />
                    <ToDoList todos={tasks} /* todos={filteredTasks()} */ /*todos={sortedTasks} */ setIsCompleted={setIsCompleted} removeTodo={removeTodo} /* priorityTodo={priorityTodo} *//>
                    
                    {/* Operaciones Computadas */}
                    <ToDoComputed todos={tasks} computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted}/>
                    
                </div>
                
                {/* Selector de filtros */}
                <ToDoFilter changeFilter={changeFilter} taskFilter={taskFilter} taskPriorityFilter={taskPriorityFilter} handlePriorityFilter={handlePriorityFilter} handleOrderByTaskDeadline={handleOrderByTaskDeadline} orderByTaskDeadline={orderByTaskDeadline}/>
            </main>
        </div>
    )
};

export default Home;