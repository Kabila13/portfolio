function Navbar() {
    return (
        <div className=" sticky top-0 flex justify-evenly items-center  bg-emerald-900 text-white mt-1 p-4 ">
            <div>
                <h1 className="font-bold text-2xl">KABILA M</h1>
            </div>

            <nav className="flex gap-10">
                <a href="#home" className="hover:border-b-green-400 hover:border-b-4 p-1 font-semibold ">HOME</a>
                <a href="#about" className="hover:border-b-green-400 hover:border-b-4 font-semibold p-1">ABOUT ME</a>
                <a href="#projects" className="hover:border-b-green-400 hover:border-b-4 font-semibold p-1">PROJECTS</a>
                <a href="#contact" className="hover:border-b-green-400 hover:border-b-4 font-semibold p-1" >CONTACT</a>
            </nav>

        </div>
    )
}
 export default Navbar;