const ToDoFilter = ({ taskFilter, changeFilter }) => {
  return (
    <div>
        <section className="container mx-auto px-4 mt-8">
            <div className="flex justify-around rounded-md bg-white p-4 ">
                <button
                    onClick={() => changeFilter('all')} 
                    className={`${
                                    taskFilter === 'all' 
                                    ? 'text-blue-600 hover:text-gray-500' 
                                    : 'text-gray-500 hover:text-blue-600 hover:font-bold'
                                }`}
                >All</button>
                <button
                    onClick={() => changeFilter('active')} 
                    className={`${
                                    taskFilter === 'active' 
                                    ? 'text-blue-600 hover:text-gray-500 active:text-red-500' 
                                    : 'text-gray-500 hover:text-blue-600 hover:font-bold'
                                }`}
                >Active</button>
                <button
                    onClick={() => changeFilter('completed')} 
                    className={`${
                                    taskFilter === 'completed' 
                                    ? 'text-blue-600 hover:text-gray-500' 
                                    : 'text-gray-500 hover:text-blue-600 hover:font-bold'
                                }`}
                >Completed</button>
            </div>
        </section>
    </div>
  )
}

export default ToDoFilter;