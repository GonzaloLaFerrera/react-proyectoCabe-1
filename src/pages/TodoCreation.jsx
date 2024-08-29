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
       
       async function createNewTodo(e) {
           e.preventDefault()
           
           //Depuración Front Propia
           try {
               const { title, description, deadline } = stateForm;
               console.log('funciona el submiteo en consola');
               console.log('DATOS DEL FORMULARIO')
               console.log("Titulo:", title )
               console.log("Descripcion:", description)
               console.log("Vencimiento:", deadline)
               // navigate('/user');
           } catch (error) {
               console.error("Error creando tarea:", error);
           }

           //Posible Solucion GOOGLE GEMINI
        try {
            
            const response = await fetch("http://localhost:3000/user/tasks/new", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    title: stateForm.title,
                    description: stateForm.description,
                    deadline: stateForm.deadline,
                }),
            });

            if (response.ok) {
                /* navigate('/user')
                console.log('La respuesta del servidor esta OK y la tarea fue CREADA!') */
                //Manejo de la respuesta exitosa
                console.log("Hemos creado la Tarea para UD!")
                console.log("Estado del Logueo de Usuario en CreateTask",isLogged)
                console.log(response)
                navigate('/user')
            } else {
                throw new Error(`Error creando tarea: ${response.statusText}`);
            }
        } catch (error) {
            console.error("Error creando tarea:", error);
        }


        


        //Pruebas de Soluciones Propias
        /* e.preventDefault()
        dispatch(setIsLogged(true)) */
        /* console.log("Estado del Logueo de Usuario en CreateTask",isLogged) */

        /* return fetch("http://localhost:3000/user/tasks/new", {
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
            console.log("Estado del Logueo de Usuario en CreateTask",isLogged)
            console.log(data)
            if(data.ok) navigate('/user')
        }).catch(error => console.log(error))*/
    }; 


    const handleChangeCreation = (e) => {
        setStateForm((prev) => {
            return {
                ...prev,
                [e.target.id]:e.target.value
            }
        })
    }

    return(
        <section>
            <Typography variant="h2" component='h1' sx={{ textAlign:'center', mt:2, fontWeight: 'bold', fontFamily:"sans-serif"}}>Crea tu Tarea</Typography>
            <Typography variant="h5" component='h1' sx={{ textAlign:'center', mt:2, fontFamily:"sans-serif"}}>Completa los campos para crear tu tarea de forma personalizada</Typography>
            <Box sx={{ mt:2, mx:2 }} component='form' onChange={handleChangeCreation} onSubmit={createNewTodo}>
                {/* Titulo */}
                <TextField
                    type="text"
                    placeholder='Ingrese la tarea...'
                    name="todoTitle"
                    id="title" //pruebo cambiando el id para que coincida con el back de todoTitle a title 
                    label='Tarea'
                    fullWidth
                    sx={{ mb:3, bgcolor:'#f5f1f1', borderRadius:1 }}
                />
                {/* Descripción */}
                <TextField
                    type="text"
                    placeholder='Ingrese una breve descripción...'
                    name="todoDescription"
                    id="description"
                    label='Descripción'
                    fullWidth
                    sx={{ mb:3, bgcolor:'#f5f1f1', borderRadius:1 }}
                    
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
                    sx={{ bgcolor:'#f5f1f1', borderRadius:1}}
                />
                {/* <Button 
                    id="submitTask"
                    type="submit"
                    onSubmit={() => console.log("El Logueo del User al Clickear", isLogged)}
                >Crear Tarea</Button> */}
                <button className="h-15 w-30 rounded-md bg-[#aaa4a4] text-black text-md font-semibold px-2 py-4 hover:shadow-lg hover:cursor-pointer mt-8 mx-32 " /* onClick={createNewTodo} */>
                Crear Tarea
                </button>
            </Box>
        </section>
    )
};

export default TodoCreation;