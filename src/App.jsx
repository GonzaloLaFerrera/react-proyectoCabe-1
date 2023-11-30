import IconCross from "./components/icons/IconCross";
import IconMoon from "./components/icons/IconMoon";
import IconCircle from "./components/icons/IconCircle";

const App = () => {
    return (
        <div className="min-h-screen bg-gray-500 bg-contain bg-no-repeat">
        {/* Header */}
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between ">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-center text-white md:text-right">Proyecto Cabe</h1>
                <button className="h-1"><IconMoon className='fill-white'/></button>
            </div>
            <form className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4 mt-8">
                <button><IconCircle/></button>
                <input className="w-full outline-none text-gray-300" type="text" placeholder="Create a new to do..." />
            </form>
        </header>

        {/* Cuerpo de la APP */}
        <main className="container mx-auto mt-8 px-4">
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

        </main>
        {/* Selector de filtros */}
        <section className="container mx-auto px-4 mt-8">
            <div className="flex justify-around rounded-md bg-white p-4 ">
                <button className="text-blue-600">All</button>
                <button className="text-gray-400 hover:text-blue-600">Active</button>
                <button className="text-gray-400 hover:text-blue-600">Completed</button>
            </div>
        </section>

        <p className="text-white text-center mt-8">Drag and Drop to re-order list</p>
        
        {/* Footer */}
        <section className="text-center mt-8">
            <p className="text-white">Copyright 2023© Gonzalo La Ferrera</p>
        </section>
        </div>
    );
};

export default App;



{/* <button className="inline-block rounded-full h-5 w-5"></button> */}