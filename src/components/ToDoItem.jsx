/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import fetchOneTaskFromUser from "../services/fetchOneTaskFromUser";
import { loadDetailTask } from "../redux/userSlice";
import { useDispatch } from "react-redux";

//Icons
import IconCheck from "./icons/IconCheck";
import IconCircle from "./icons/IconCircle";
import IconCross from "./icons/IconCross";
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import IconPriority from "./icons/IconPriority";

// eslint-disable-next-line no-unused-vars
const ToDoItem = ({todo, setIsCompleted, removeTodo}) => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {_id, taskTitle, taskDescription, taskDeadline, isCompleted, isPriority} = todo;

    const handleDetail = () => {
        //TAMBIEN PODRIA FILTRAR EL ESTADO DE TAREAS QUE CARGA HOME PARA AHORRAR UNA LLAMADA AL BACKEND
        fetchOneTaskFromUser(_id)
        .then((data) => {
           return data.json()
        })
        .then(resp => {
            console.log(resp);
            dispatch(loadDetailTask(resp))
            navigate(`/user/taskDetail`)
        })
        .catch(err => console.log(err));  
    }


    return (
        <article className="flex gap-4 px-4 py-4 border-b border-b-gray-400" >
            <button 
                onClick={() => setIsCompleted(_id, taskTitle, taskDescription, taskDeadline, isCompleted, isPriority)}
                className={`${isCompleted && "rounded-full border-2 h-8 w-8 flex justify-center items-center bg-gradient-to-r from-blue-500 via-green-500 to-green-300"}`}

            >
                {
                    isCompleted ? <IconCheck/> : <IconCircle/>
                }
            </button>
            <p className={`grow mt-[2px] ${isCompleted ? 'text-gray-400 line-through' : 'text-gray-600'}`} onClick={handleDetail}>{taskTitle}</p>
            <span /* onClick={() => priorityTodo(_id)} */>
                {isPriority ? <IconPriority className='stroke-0 fill-[#686060]'/> : <></>}
            </span>
            {/* <button onClick={() => priorityTodo(_id)}><NotificationImportantIcon className="text-red-800 mb-[2px]"/></button> */}
            <button onClick={() => removeTodo(_id)}><IconCross className='stroke-gray-500 stroke-0'/></button>
            
        </article>
    );
};

export default ToDoItem;