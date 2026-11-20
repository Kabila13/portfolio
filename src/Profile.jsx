
function Profile() {
    return (
        <div id="home" className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-10 lg:gap-16 px-5 sm:px-10 lg:px-16 py-12 md:py-20 bg-gradient-to-br from-green-100 via-white to-emerald-200" >
            <div className="w-full max-w-xl text-center lg:text-left">
                <h2 className="text-emerald-800 font-bold text-xl sm:text-2xl">Hi There!</h2>
                <p className="font-bold text-3xl sm:text-4xl md:text-5xl mt-4 text-gray-900">I'm Kabila M</p>
                <button className="bg-emerald-900 mt-5 px-5 sm:px-6 py-3 text-white font-semibold rounded-md text-sm sm:text-base">FRONT-END DEVELOPER</button>
                <p className="mt-6 text-gray-600 text-base sm:text-lg"> I enjoy building responsive, user-friendly websites and continuously improving my skills.</p>
                <div className="mt-7 flex flex-wrap justify-center lg:justify-start gap-4">
                    <button  onClick={() => document.getElementById("contact").scrollIntoView({behavior:"smooth"})}   className="bg-emerald-700 hover:bg-emerald-900 transition duration-300 text-white py-3 px-6 sm:px-8 rounded-md font-semibold">HIRE ME</button>
                    <button  onClick={() => document.getElementById("projects").scrollIntoView({behavior:"smooth"})}  className="border-2 border-emerald-700 text-emerald-800 hover:bg-emerald-700 hover:text-white transition duration-300 py-3 px-6 sm:px-8 rounded-md font-semibold"> VIEW MY WORK </button>
                </div>
            </div>
            <div className="flex justify-center items-center w-full lg:w-auto">
                <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-8 border-emerald-500 shadow-2xl hover:-translate-y-2 transition duration-300 flex items-center justify-center">
                    <img src="profile.png" alt="Kabila Profile" className="w-full h-full rounded-full object-cover" />
                </div>
            </div>

        </div>
    );
}

export default Profile;
