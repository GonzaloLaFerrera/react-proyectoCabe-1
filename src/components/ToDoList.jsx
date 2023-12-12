import ToDoItem from "./ToDoItem";

const ToDoList = ({todos, updateTodo}) => {
    return (
        <div className="rounded-md bg-white mt-8">
            {
                todos.map((todo) => (
                    <ToDoItem key={todo.id} todo={todo} updateTodo={updateTodo}/>
                ))
            }
        </div>
    );
};

export default ToDoList;