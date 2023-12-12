import { useState } from "react";

import Header from "../components/Header";
import ToDoList from "../components/ToDoList";

import ToDoCreate from "../components/ToDoCreate";


const initialExampleTodos = [
    {
        id:1,
        title:'Preparar el desayuno',
        complete:false
    },
    {
        id:2,
        title:'Regar las plantas',
        complete:true
    },
    {
        id:3,
        title:'Alimentar a las gatas',
        complete:true
    }
];


const Home = () => {

    const [todos, setTodos] = useState(initialExampleTodos); 

    const createNewTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
            complete:false,
        };
        setTodos([...todos, newTodo]);
    };

    const updateTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, complete:!todo.complete} : todo));
    };

    return (
        <div className="min-h-screen bg-slate-400 bg-contain bg-no-repeat">
            {/* Header */}
            <Header />
            

            {/* Cuerpo de la APP */}
            <main className="container mx-auto mt-8 px-4">
                <ToDoCreate createNewTodo={createNewTodo}/>
                
                {/* <form className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4 mt-8">
                    <button><IconCircle/></button>
                    <input 
                        className="w-full outline-none text-gray-300" 
                        type="text" 
                        placeholder="Create a new to do..." 
                    />
                </form> */}
                
                
                <div className="rounded-md bg-white mt-8">
                    <ToDoList todos={todos} updateTodo={updateTodo}/>

                    {/* <article className="flex gap-4 px-4 py-4 border-b border-b-gray-400">
                        <button><IconCircle/></button>
                        <p className="grow text-gray-600">Complete online JS course</p>
                        <button><IconCross /></button>
                    </article>
                    <article className="flex gap-4 px-4 py-4 border-b border-b-gray-400">
                        <button><IconCircle/></button>
                        <p className="grow text-gray-600">Complete online JS course</p>
                        <button><IconCross /></button>
                    </article>
                    <article className="flex gap-4 px-4 py-4 border-b border-b-gray-400">
                        <button><IconCircle/></button>
                        <p className="grow text-gray-600">Complete online JS course</p>
                        <button><IconCross /></button>
                    </article>
                    <article className="flex gap-4 px-4 py-4 border-b border-b-gray-400">
                        <button><IconCircle/></button>
                        <p className="grow text-gray-600">Complete online JS course</p>
                        <button><IconCross /></button>
                    </article> */}
                    
                    {/* Operaciones Computadas */}
                    <section className="container flex mx-auto py-4 px-4 justify-between">
                        <span className="text-gray-400">5 items left</span>
                        <button className="text-gray-400">Clear Completed</button>
                    </section>
                </div>
                
                {/* Selector de filtros */}
                <section className="container mx-auto px-4 mt-8">
                    <div className="flex justify-around rounded-md bg-white p-4 ">
                        <button className="text-blue-600">All</button>
                        <button className="text-gray-400 hover:text-blue-600">Active</button>
                        <button className="text-gray-400 hover:text-blue-600">Completed</button>
                    </div>
                </section>
            </main>

            <p className="text-white text-center mt-8">Drag and Drop to re-order list</p>
        </div>
    )
};

export default Home;