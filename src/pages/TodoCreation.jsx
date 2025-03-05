// MUI
import { Avatar, Box, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from "@mui/material";

// Icons
import AssignmentIcon from '@mui/icons-material/Assignment';

//Form Control Testing
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Form Management and Input Validation
import { useFormik } from "formik";
import * as yup from 'yup';
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

// Fetching Service
import { taskCreation } from "../services/taskCreation";

// Alerts
import Swal from 'sweetalert2';

const TodoCreation = () => {

    // Form Management Logic with Formik and Yup

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
            .required('You must select a deadline'),
        priority: yup
            .boolean()
            .required('You must specify if the task is a priority'),
    });

    const formik = useFormik({
        initialValues: {
            title:'Enter a title for your task...',
            description: 'Enter a brief description of your task...',
            deadline: null,
            // deadline: new Date(),
            priority: false           
        },
        validationSchema: validationSchema,

    //  Haciendo async el envio del onSubmit
        onSubmit: async (values) => {
            try {
                const response = await taskCreation(values.title, values.description, values.deadline, values.priority);
                if (response.ok) {
                    // alert('Los datos ingresados son: - Titulo: ' + values.title + ' - Descripcion: ' + values.description + ' - La Prioridad es: ' + values.priority + ' - La fecha seleccionada es: ' + dayjs(values.deadline).format('DD/MM/YYYY'));
                    console.log("Hemos creado la Tarea para UD!");
                    Swal.fire({
                        title: 'Task succesfully created!',
                        // text: `- Title: ` + `${values.title}` + ' - Description: ' + `${values.description}` + ' - Priority: ' + ` ${values.priority}` + ' - Deadline: ' + `${dayjs(values.deadline).format('DD/MM/YYYY')}`,
                        html:`<p><strong>Title:</strong> ${values.title}</p>
                              <p><strong>Description:</strong> ${values.description}</p>
                              <p><strong>Priority:</strong> ${values.priority}</p>
                              <p><strong>Deadline:</strong> ${dayjs(values.deadline).format('DD/MM/YYYY')}</p>`,
                        icon: 'success',
                        confirmButtonText: 'Continue...',
                        confirmButtonColor: '#686060'
                    })
                    navigate('/user');
                } else {
                    console.error('Error en la respuesta:', response);
                    Swal.fire({
                        title: 'Oops...!',
                        text: `There's an error. Check the info and try again`,
                        icon: 'error',
                        confirmButtonText: 'Try again',
                        confirmButtonColor: '#686060'
                    })
                }
            } catch (error) {
                console.error('Error al crear la tarea:', error);
            }
        }
    
    })

    const navigate = useNavigate();

    const {isLogged} = useSelector((state) => state.isLogged);

    const handleChangeForm = (e) => {
        setStateForm((prev) => {
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        });
    }

    const handleDatePicker = (newValue) => {

        //Prueba de depuración de la fecha (Funciona)
        let testDate = new Date();
        testDate = dayjs(newValue).format('DD/MM/YYYY') 
        console.log(testDate)
        setStateForm({...stateForm, deadline: newValue}) 
    }

    return(
        <>
            <Box sx={{backgroundColor:{lg:'#d6cfcf'},paddingY:{lg:4},width:{xs:'100%', lg:'25%'}, mt: {xs:4, lg:6}, marginX:{lg:'auto'},/*  border:{lg:1}, borderColor:{lg:'grey'},  */boxShadow:{lg:2}, mb:{lg:'20px'}}}>
                <Avatar sx={{ mx:'auto', bgcolor:'#767477', mt:{sm:6, lg:0}}}>
                    <AssignmentIcon />
                </Avatar>
                <Typography variant="h5" component='h1' sx={{ textAlign:'center', mt: 2 }}>Create task!</Typography>
                <Box sx={{ mt:2, mx:2 }} component='form' onSubmit={formik.handleSubmit}>
                    <TextField 
                        id="title"
                        name='title'
                        label='Title'
                        fullWidth
                        sx={{ mb:3, bgcolor: '#f5f1f1', mt:{ sm:2 }}}
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
                        sx={{ mb:3, bgcolor:'#f5f1f1', mt:{ sm:2 }}}
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}   
                    />                    
                    <DatePicker
                        name="deadline"
                        sx={{width:{xs:'358px', sm:'35%', lg:'50%'}, bgcolor:'#f5f1f1', mt:{ sm:2 }}}
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

                    <FormGroup >
                        <FormControlLabel
                            id="priority"
                            name="priority" 
                            label={<Typography sx={{ fontStyle: 'italic' }}>Mark task as priority*</Typography>}                            
                            control={<Checkbox
                                checked={formik.values.priority}
                                onChange={(event) => formik.setFieldValue('priority', event.target.checked)}
                                inputProps={{ 
                                    'aria-label': 'controlled',
                                }}                                
                            />}
                            sx={{marginY:2}}
                        />
                    </FormGroup>

                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <button className="h-15 w-36 rounded-md bg-[#aaa4a4] text-black text-md font-semibold px-2 py-4 hover:shadow-lg hover:cursor-pointer mt-8" type="submit">
                            Create!
                        </button>
                    </Box>

                </Box>
            </Box>
        </>
    )
};

export default TodoCreation;