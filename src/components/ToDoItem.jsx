import IconCheck from "./icons/IconCheck";
import IconCircle from "./icons/IconCircle";
import IconCross from "./icons/IconCross";

const ToDoItem = ({todo, updateTodo, removeTodo}) => {

    const {id, title, complete} = todo;

    return (
        <article className="flex gap-4 px-4 py-4 border-b border-b-gray-400">
            <button 
                className={`${complete && "rounded-full border-2 h-8 w-8 flex justify-center items-center bg-gradient-to-r from-blue-500 via-green-500 to-green-300"}`}
                onClick={() => updateTodo(id)}
            >
                {
                    complete ? <IconCheck/> : <IconCircle/>
                }
            </button>
            <p className={`grow ${complete ? 'text-gray-400 line-through' : 'text-gray-600'}`}>{title}</p>
            <button onClick={() => removeTodo(id)}><IconCross/></button>
        </article>
    );
};

export default ToDoItem;