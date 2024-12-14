/* eslint-disable react/prop-types */
const ToDoFilter = ({ taskFilter, changeFilter, taskPriorityFilter, handlePriorityFilter, orderByTaskDeadline, handleOrderByTaskDeadline }) => {
  return (
    <div>
        <section className="container mx-auto px-4 mt-2 lg:w-[40%]">
            <div className="flex justify-around rounded-md bg-white p-2 sm:p-4 md:p-4 lg:p-4 ">
                <button
                    onClick={() => changeFilter('all')} 
                    className={`${
                                    taskFilter === 'all' 
                                    ? 'text-blue-600 hover:text-gray-500' 
                                    : 'text-gray-500 hover:text-blue-600 hover:font-bold'
                                }`}
                >All</button>
                <button
                    onClick={() => changeFilter('true')} 
                    className={`${
                                    taskFilter === 'true' 
                                    ? 'text-blue-600 hover:text-gray-500 active:text-red-500' 
                                    : 'text-gray-500 hover:text-blue-600 hover:font-bold'
                                }`}
                >Active</button>
                <button
                    onClick={() => changeFilter('false')} 
                    className={`${
                                    taskFilter === 'false' 
                                    ? 'text-blue-600 hover:text-gray-500' 
                                    : 'text-gray-500 hover:text-blue-600 hover:font-bold'
                                }`}
                >Completed</button>
                
                {/* CAMBIÉ ESTO */}
                <button
                    onClick={handlePriorityFilter} 
                    className={`${
                                    taskPriorityFilter !== 'off' 
                                    ? 'text-blue-600 hover:text-gray-500' 
                                    : 'text-gray-500 hover:text-blue-600 hover:font-bold'
                                }`}
                >Priority: {taskPriorityFilter}</button>
                <button
                    onClick={() => handleOrderByTaskDeadline()} 
                    className={`${
                                    orderByTaskDeadline !== 'none' 
                                    ? 'text-blue-600 hover:text-gray-500'
                                    : 'text-gray-500 hover:text-blue-600 hover:font-bold'
                                }`}
                >DeadLine:{orderByTaskDeadline}</button>
            </div>
        </section>
    </div>
  )
}

export default ToDoFilter;