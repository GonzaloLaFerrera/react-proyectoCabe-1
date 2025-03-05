import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


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

    const dispatch = useDispatch();

       
       async function createNewTodo(e) {
        
        e.preventDefault()

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
                //Manejo de la respuesta exitosa
                console.log("Hemos creado la Tarea para UD!")
                navigate('/user')
            } else {
                throw new Error(`Error creando tarea: ${response.statusText}`);
            }
        } catch (error) {
            console.error("Error creando tarea:", error);
        }
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
            <Typography variant="h5" component='h1' sx={{ textAlign:'center', mt:2, fontFamily:"sans-serif"}}>Completa los campos para crear tu tarea de forma personalizada</Typography>
            <Typography variant="h3" component='h1' sx={{ textAlign:'center', mt:2}}>Create Task</Typography>
            <Box sx={{ mt:2, mx:2 }} component='form' onChange={handleChangeCreation} onSubmit={createNewTodo}>
                {/* Titulo */}
                <TextField
                    type="text"
                    placeholder='Ingrese la tarea...'
                    name="todoTitle"
                    id="title" 
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
                <button className="h-15 w-30 rounded-md bg-[#aaa4a4] text-black text-md font-semibold px-2 py-4 hover:shadow-lg hover:cursor-pointer mt-8 mx-32 " /* onClick={createNewTodo} */>
                    Crear Tarea
                </button>
            </Box>
        </section>
    )
};

export default TodoCreation;