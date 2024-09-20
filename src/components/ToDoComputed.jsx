// eslint-disable-next-line react/prop-types
const ToDoComputed = ({computedItemsLeft, clearCompleted}) => {

    return(
        <section className="container flex mx-auto py-4 px-4 justify-between">
            <span className="text-[#686060]">
                <span className="font-bold">{computedItemsLeft} </span> 
                items left
            </span>
            <button 
                className="text-[#686060]"
                onClick={clearCompleted}
            >
                Clear Completed
            </button>
        </section>
    );
};

export default ToDoComputed;