import IconMoon from "./icons/IconMoon";


const Header = () => {
    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between ">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-center text-[#686060] md:text-right">Proyecto Cabe</h1>
                <button className="h-1"><IconMoon className='fill-[#686060]'/></button>
            </div>
        </header>
    );
};

export default Header;