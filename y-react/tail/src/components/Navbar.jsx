
function Navbar(){
    return(
        <div className="m-4 flex justify-between">
            <div>
                <img src="./wanderly_logo.png" alt="wanderly_logo" className=" w-50"></img>
            </div>
            <div>
                <nav className="flex gap-10">
                    <a href="#home" className=" hover:border-b-4 pb-2 hover:border-blue-500 ">Home</a>
                    <a href="#Destination" className="hover:border-b-4 pb-2 hover:border-blue-500">Destination</a>
                    <a href="#About" className="hover:border-b-4 pb-2 hover:border-blue-500">About</a>
                </nav>
            </div>
            <div className="flex gap-10 items-center">
            <div className="relative ">
                <span className="material-symbols-outlined p-3">
                        favorite
                    </span>
                    <span className="absolute top-0 right-0 bg-red-500 h-6 w-6 rounded-full text-center text-white">
                        2
                    </span>
            </div>
            <button className=" right-0 bg-blue-900 py-2 px-5 text-white rounded-full">Book now</button>

            </div>
        </div>
    )
}
export default Navbar;