import IconMoon from "./icons/IconMoon";


const Header = () => {
    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between ">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-center text-white md:text-right">Proyecto Cabe</h1>
                <button className="h-1"><IconMoon className='fill-white'/></button>
            </div>
        </header>
    );
};

export default Header;