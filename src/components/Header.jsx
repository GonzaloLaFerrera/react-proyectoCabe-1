// import IconMoon from "./icons/IconMoon";
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';

const Header = () => {
    return (
        <header className="container mx-auto px-4 pt-8 md:text-center lg:pt-10">
            <div>
                <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-center text-[#686060] sm:text-[#686060]">CaveMen Organizer<LandscapeOutlinedIcon /></h1>
                {/* <button className="h-1 mt-8 md:hidden"><IconMoon className='fill-[#686060] '/></button>        */}
            </div>
        </header>
    );
};

export default Header;