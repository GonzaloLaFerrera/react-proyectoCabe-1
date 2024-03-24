/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import IconCheck from "./icons/IconCheck";
import IconCircle from "./icons/IconCircle";
import IconCross from "./icons/IconCross";
import fetchOneTaskFromUser from "../services/fetchOneTaskFromUser";
import { loadDetailTask } from "../redux/userSlice";
import { useDispatch } from "react-redux";


// eslint-disable-next-line no-unused-vars
const ToDoItem = ({todo, updateTodo, removeTodo}) => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const {id, title, complete} = todo;
    const {_id, taskTitle, isCompleted} = todo;

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
                className={`${isCompleted && "rounded-full border-2 h-8 w-8 flex justify-center items-center bg-gradient-to-r from-blue-500 via-green-500 to-green-300"}`}
                onClick={() => updateTodo(_id)}
            >
                {
                    isCompleted ? <IconCheck/> : <IconCircle/>
                }
            </button>
            <p className={`grow ${isCompleted ? 'text-gray-400 line-through' : 'text-gray-600'}`} onClick={handleDetail}>{taskTitle}</p>
            <button onClick={() => removeTodo(_id)}><IconCross/></button>
            
        </article>
    );
};

export default ToDoItem;