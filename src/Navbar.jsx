
function Navbar() {
    return (
        <div className="sticky top-0 z-50 flex flex-col sm:flex-row justify-between items-center gap-4 bg-emerald-900 text-white px-4 sm:px-8 py-4">
            <div> 
                <h1 className="font-bold text-2xl"> KABILA M</h1>
            </div>
            <nav className="flex justify-center gap-4 sm:gap-6 md:gap-10 w-full sm:w-auto whitespace-nowrap">
                <a href="#home" className="hover:border-b-green-400 hover:border-b-2 p-1 font-semibold">HOME</a>
                <a href="#about" className="hover:border-b-green-400 hover:border-b-2 p-1 font-semibold">ABOUT ME</a>
                <a href="#projects" className="hover:border-b-green-400 hover:border-b-2 p-1 font-semibold">PROJECTS</a>
                <a href="#contact" className="hover:border-b-green-400 hover:border-b-2 p-1 font-semibold">CONTACT</a>
            </nav>

        </div>
    );
}

export default Navbar;
