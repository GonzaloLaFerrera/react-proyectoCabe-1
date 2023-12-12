import { useState } from "react";
import IconCircle from "./icons/IconCircle";

const ToDoCreate = ({ createNewTodo }) => {

    const [title, setTitle] = useState('');

    const handleSubmitAddToDo = (e) => {
        e.preventDefault();

        if(!title.trim()){
            setTitle('');
        } else {
            createNewTodo(title);
            setTitle('');
        };
    };

    return (
        <form 
            className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4 mt-8"
            onSubmit={handleSubmitAddToDo}
        >
            <span><IconCircle/></span>
            <input 
                className="w-full outline-none text-gray-400" 
                type="text" 
                placeholder="Create a new to do..." 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default ToDoCreate;