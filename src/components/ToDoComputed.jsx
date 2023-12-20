const ToDoComputed = ({computedItemsLeft}) => {

    return(
        <section className="container flex mx-auto py-4 px-4 justify-between">
            <span className="text-gray-400">{computedItemsLeft} items left</span>
            <button className="text-gray-400">Clear Completed</button>
        </section>
    );
};

export default ToDoComputed;