import ToDoItem from "./ToDoItem";

const ToDoList = ({todos, updateTodo, removeTodo}) => {
    return (
        <div className="rounded-md bg-white mt-8">
            {
                todos.map((todo) => (
                    <ToDoItem key={todo.id} todo={todo} updateTodo={updateTodo} removeTodo={removeTodo}/>
                ))
            }
        </div>
    );
};

export default ToDoList;