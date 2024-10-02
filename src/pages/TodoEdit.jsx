import dayjs from "dayjs";
import { useEffect } from "react";
import { useSelector } from "react-redux";

// MUI
import { Avatar, Box, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from "@mui/material";

// Icons
import AssignmentIcon from '@mui/icons-material/Assignment';

// Form Management and Input Validation
import { useFormik } from "formik";
import * as yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers";

// Fetching
import fetchEditTask from "../services/fetchEditTask";

const TodoEdit = () => {

    const navigate = useNavigate();
    const taskLoading = useSelector((state) => state.user.taskDetail) //Me levanta la tarea en detalle
    const {tasks} = useSelector((state) => state.user) //Me levanta todas las tareas del usuario

    useEffect(() => {
        console.log(taskLoading)
        // console.log(tasks)
    }, []);

    const validationSchema = yup.object({
        title: yup
            .string('Enter a title for your task...')
            .min(3,'a minimum of 3 characters')
            .required('You must enter a title for your task'),
        description: yup
            .string('Enter a brief description of your task...')
            .min(8,'a minimum of 8 characters')
            .max(50,'You must enter a maximum of 50 characters')
            .required('You must enter a brief description of your task'),
        deadline: yup
            .date()
            .required('You must select a deadline')   
    });

    const formik = useFormik({
        initialValues: {
            id: taskLoading._id,
            title: taskLoading.taskTitle,
            description: taskLoading.taskDescription,
            deadline: null,
            isCompleted: false,
            priority: taskLoading.isPriority           
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log(values)
            try {
                const response = await fetchEditTask(values.id, values.title, values.description, values.deadline, values.isCompleted, values.priority);
                if (response.ok) {
                    alert('Los datos editados son: - Titulo: ' + values.title + ' - Descripcion: ' + values.description + ' - La Prioridad es: ' + values.priority + ' - La fecha seleccionada es: ' + dayjs(values.deadline).format('DD/MM/YYYY'))
                    console.log('Hemos editado su tarea: ' + values)
                    navigate('/user')
                } else {
                    console.error('Error en la respuesta:', response)
                } 
            } catch (error) {
                console.error('Error al crear la tarea:', error);
            }            
        }
    });

    return (
        <>
        <Box sx={{ width:'100%', mt: 4}}>
            <Avatar sx={{ mx:'auto', bgcolor:'#767477'}}>
                <AssignmentIcon />
            </Avatar>
            <Typography variant="h5" component='h1' sx={{ textAlign:'center', mt: 2 }}>Edit task!</Typography>
            <Box sx={{ mt:2, mx:2 }} component='form' onSubmit={formik.handleSubmit}>
                    <TextField 
                        id="title"
                        name='title'
                        label='Title'                        
                        fullWidth
                        sx={{ mb:3, bgcolor: 'white'}}
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}  
                    />
                    <TextField
                        id="description"
                        name='description'
                        label='Description'
                        fullWidth
                        sx={{ mb:3, bgcolor:'white'}}
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}   
                    />
                    <Typography variant="body1" component='span'><b>Deadline: </b>{dayjs(taskLoading.taskDeadline).format('DD/MM/YYYY')}</Typography>
                    <DatePicker
                        name="deadline"
                        sx={{width:'358px', bgcolor:'white'}}
                        value={formik.values.deadline}
                        onChange={(value) => formik.setFieldValue("deadline", value, true)}
                        slotProps={{
                            textField: {
                                variant: "outlined",
                                error: formik.touched.deadline && Boolean(formik.errors.deadline),
                                helperText: formik.touched.deadline && formik.errors.deadline
                            }
                        }}
                    />
                    <FormGroup>
                        <FormControlLabel
                            id="priority"
                            name="priority" 
                            label={<Typography sx={{ fontWeight: 'bold' }}>Priority</Typography>}
                            
                            control={<Checkbox
                                checked={formik.values.priority}                                
                                onChange={(event) => formik.setFieldValue('priority', event.target.checked)}
                                inputProps={{ 
                                    'aria-label': 'controlled',                              
                                }}                                
                            />}
                            sx={{ marginY:2 }}
                        />
                    </FormGroup>

                    <div className="flex flex-row gap-4 justify-center">
                        <button className="h-15 w-36 rounded-md bg-[#9b9292] text-black text-md font-semibold px-2 py-4 hover:shadow-lg hover:cursor-pointer mt-8" type="button">
                            <Link to={'/user'}>Cancel</Link>
                        </button>
                        <button className="h-15 w-36 rounded-md bg-[#9b9292] text-black text-md font-semibold px-2 py-4 hover:shadow-lg hover:cursor-pointer mt-8 " type="submit">
                            Edit!
                        </button>
                    </div>
            </Box>
        </Box>
        </>
    )
};

export default TodoEdit;