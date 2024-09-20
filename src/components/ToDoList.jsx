/* eslint-disable react/prop-types */
import ToDoItem from "./ToDoItem";


const ToDoList = ({todos, setIsCompleted, removeTodo/* , priorityTodo */}) => {
    return (
        <div className="rounded-md bg-white mt-8">
            {
                todos.map((todo) => (
                    // <ToDoItem key={todo.id} todo={todo} updateTodo={updateTodo} removeTodo={removeTodo}/>
                    <ToDoItem key={todo._id} todo={todo} setIsCompleted={setIsCompleted} removeTodo={removeTodo} /* priorityTodo={priorityTodo} */ />
                ))
            }
        </div>
    );
};

export default ToDoList;