import IconCross from "./components/icons/IconCross";
import IconCircle from "./components/icons/IconCircle";
import { useState } from "react";
import Header from "./components/Header";


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

const App = () => {

    const [todos, setTodos] = useState(initialExampleTodos); 
    /* estado inicial de los todos con ejemplos, luego levantara de la API los todos del usuario */

    return (
        <div className="min-h-screen bg-gray-500 bg-contain bg-no-repeat">
            {/* Header */}
            <Header />
            

            {/* Cuerpo de la APP */}
            {/* debería pasarle el ItemList.jsx y pasarle los todos como props */}
            
            <main className="container mx-auto mt-8 px-4">
                <form className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4 mt-8">
                    <button><IconCircle/></button>
                    <input className="w-full outline-none text-gray-300" type="text" placeholder="Create a new to do..." />
                </form>
                <div className="rounded-md bg-white">
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
                    </article>
                    <article className="flex gap-4 px-4 py-4 border-b border-b-gray-400">
                        <button><IconCircle/></button>
                        <p className="grow text-gray-600">Complete online JS course</p>
                        <button><IconCross /></button>
                    </article>
                    
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
    );
};

export default App;



{/* <button className="inline-block rounded-full h-5 w-5"></button> */}