import dayjs from "dayjs";
import { useEffect } from "react";
import { useSelector } from "react-redux";

// MUI
import { Avatar, Box, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from "@mui/material";

// Icons
import EditIcon from '@mui/icons-material/Edit';

// Form Management and Input Validation
import { useFormik } from "formik";
import * as yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers";

// Fetching
import fetchEditTask from "../services/fetchEditTask";

// Alerts
import Swal from 'sweetalert2';

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
                    // alert('Los datos editados son: - Titulo: ' + values.title + ' - Descripcion: ' + values.description + ' - La Prioridad es: ' + values.priority + ' - La fecha seleccionada es: ' + dayjs(values.deadline).format('DD/MM/YYYY'))
                    Swal.fire({
                        title: 'Task succesfully edited!',
                        html:`<p><strong>Title:</strong> ${values.title}</p>
                              <p><strong>Description:</strong> ${values.description}</p>
                              <p><strong>Priority:</strong> ${values.priority}</p>
                              <p><strong>Deadline:</strong> ${dayjs(values.deadline).format('DD/MM/YYYY')}</p>`,
                        icon: 'success',
                        confirmButtonText: 'Continue...',
                        confirmButtonColor: '#686060'
                    })
                    console.log('Hemos editado su tarea: ' + values)
                    navigate('/user')
                } else {
                    Swal.fire({
                        title: 'Oops...!',
                        text: `There's an error. Check the info and try again`,
                        icon: 'error',
                        confirmButtonText: 'Try again',
                        confirmButtonColor: '#686060'
                    })
                    console.error('Error en la respuesta:', response)
                } 
            } catch (error) {
                console.error('Error al crear la tarea:', error);
            }            
        }
    });

    return (
        <>
        <Box sx={{backgroundColor:{lg:'#d6cfcf'}, paddingY:{lg:4},width:{xs:'100%', lg:'25%'}, mt: {xs:4, lg:4}, marginX:{lg:'auto'},/*  border:{lg:1}, borderColor:{lg:'grey'},  */boxShadow:{lg:2}, mb:{lg:'20px'}}}> {/* Puede probarse sin backgroundColor */}
            <Avatar sx={{width:{lg:60}, height:{lg:60}, mx:'auto', bgcolor:'#767477'}}>
                <EditIcon sx={{ fontSize:{ lg:40 }}}/>
            </Avatar>
            <Typography variant="h5" component='h1' sx={{ textAlign:'center', mt: 2, fontSize:{lg:30} }}>Edit task!</Typography>
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
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography variant="body1" component='span' sx={{ marginY:'10px'}}><b>Original deadline: </b>{dayjs(taskLoading.taskDeadline).format('DD/MM/YYYY')}</Typography>
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
                    </Box>
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

                    <div className="flex flex-row gap-4 justify-center lg:mb-2">
                        <button className="h-15 w-36 rounded-md bg-[#9b9292] text-black text-md font-semibold px-2 py-4 hover:shadow-lg hover:cursor-pointer mt-8 lg:shadow-lg" type="button">
                            <Link to={'/user'}>Cancel</Link>
                        </button>
                        <button className="h-15 w-36 rounded-md bg-[#9b9292] text-black text-md font-semibold px-2 py-4 hover:shadow-lg hover:cursor-pointer mt-8 lg:shadow-lg" type="submit">
                            Edit!
                        </button>
                    </div>
            </Box>
        </Box>
        </>
    )
};

export default TodoEdit;