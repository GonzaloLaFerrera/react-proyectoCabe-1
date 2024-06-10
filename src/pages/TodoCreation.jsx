import { CheckBox } from "@mui/icons-material";
import { Box, Button, FormControlLabel, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchCreateTodo } from "../services/fetchCreateTodo";
import { loadUserTasks } from "../redux/userSlice";
import fetchTasksFromUser from "../services/fetchTasksFromUser";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsLogged } from "../redux/isLoggedSlice";

const TodoCreation = () => { 
    //Estado para el manejo de la fecha de vencimiento
    const [selectedDate, setSelectedDate] = useState(null);
    const [stateForm, setStateForm] = useState({
        title: "",
        description: "",
        deadline:""
    });         

    const navigate = useNavigate();

    const {isLogged} = useSelector((state) => state.isLogged);
    /* const tasks = useSelector((state) => state.user.tasks) */

    const dispatch = useDispatch();

    useEffect(() =>{
        if(isLogged){
            
            console.log("Nos dejo pasar a la creacion", isLogged)
            
        }
    }, [isLogged]);

    /* const createNewTodo = (e) => {
        e.preventDefault()
        console.log("click en CREAR tarea", title, description, deadline) 
        fetchCreateTodo(stateForm.todoTitle, stateForm.todoDescription, stateForm.fechaVencimiento) //OJO ACA! <-----------------------------------------
        .then(resp => {
            console.log("CREATE TASKS", resp)
            navigate('/home')
        })
        .catch(err => console.log(err));
    };
 */

    /* async */ async function createNewTodo() {
        
        /* e.preventDefault()
        dispatch(setIsLogged(true)) */
        console.log("Estado del Logueo de Usuario en CreateTask",isLogged)

        return fetch(`http://localhost:3000/user/tasks/new`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                title: stateForm.title,
                description: stateForm.description,
                deadline:stateForm.deadline
            }),
        }).then((data) => {
            dispatch(setIsLogged(true))
            console.log("Hemos creado la Tarea para UD!")
            console.log(data)
            if(data.ok) navigate('/user')
        }).catch(error => console.log(error))
    };


    const handleChangeCreation = (e) => {
        e.preventDefault()
        setStateForm((prev) => {
            return {
                ...prev,
                [e.target.id]:e.target.value
            }
        })
    }

    return(
        <section>
            <Typography variant="h1" component='h1' sx={{ textAlign:'center', mt:2}}>Crea tu Tarea</Typography>
            <Typography variant="h5" component='h1' sx={{ textAlign:'center', mt:2}}>Completa los campos para crear tu tarea</Typography>
            <Box sx={{ mt:2, mx:2 }} component='form' onChange={handleChangeCreation}>
                {/* Titulo */}
                <TextField
                    type="text"
                    placeholder='Ingrese la tarea...'
                    name="todoTitle"
                    id="title" //pruebo cambiando el id para que coincida con el back de todoTitle a title 
                    label='Tarea'
                    fullWidth
                    sx={{ mb:3, bgcolor:'#f5f1f1' }}
                />
                {/* Descripción */}
                <TextField
                    type="text"
                    placeholder='Ingrese una breve descripción...'
                    name="todoDescription"
                    id="description"
                    label='Descripción'
                    fullWidth
                    sx={{ mb:3, bgcolor:'#f5f1f1' }}
                />
                {/* Prioridad */}
                {/* <FormControlLabel
                    control={< CheckBox defaultChecked />}
                    label='Prioritario'
                /> */}
                {/* Fecha Comienzo/Vigencia */}
                {/* <TextField
                    id="fechaComienzo"
                    label="Fecha de Comienzo"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                /> */}
                {/* Plazo Vencimiento */}
                <TextField
                    id="deadline"
                    label="Fecha de Vencimiento"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                />
                {/* <Button 
                    id="submitTask"
                    type="submit"
                    onSubmit={() => console.log("El Logueo del User al Clickear", isLogged)}
                >Crear Tarea</Button> */}
                <button className="h-15 w-30 rounded-md bg-[#aaa4a4] text-black text-md font-semibold px-2 py-4 hover:shadow-lg hover:cursor-pointer mt-8 mx-36" onClick={createNewTodo}>
                Crear Tarea
                </button>
            </Box>
        </section>
    )
};

export default TodoCreation;