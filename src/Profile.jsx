

function Profile() {
    return (
        <div id="home" className="lg:flex p-20 lg:justify-evenly bg-gradient-to-br from-green-100 via-white to-emerald-200">

            <div className="max-w-xl">
                <h2 className="text-emerald-800 font-bold text-2xl ">
                    Hi There!
                </h2>

                <p className="font-bold text-4xl md:text-5xl mt-4 text-gray-900">
                    I'm Kabila M
                </p>

                <button className="bg-emerald-900 mt-5 px-6 py-3 text-white font-semibold rounded-md">
                    FRONT-END DEVELOPER
                </button>

                <p className="mt-6 text-gray-600 text-lg ">
                    I enjoy building responsive, user-friendly websites
                    and continuously improving my skills.
                </p>

                <div className="mt-7 flex flex-wrap gap-4">
                    <button  onClick={() => document.getElementById("contact").scrollIntoView({behavior:"smooth"})} className="bg-emerald-700 hover:bg-emerald-900 transition-300s text-white py-3 px-8 rounded-md font-semibold">
                        HIRE ME
                    </button>

                    <button onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth"})} className="border-2 border-emerald-700 text-emerald-800 hover:bg-emerald-700 hover:text-white py-3 px-8 rounded-md font-semibold">
                        VIEW MY WORK
                    </button>
                </div>
            </div>
             <div className="lg:p-4 md:p-20 ">
            <div className=" lg:w-64 lg:h-67 md:w-103 md:h-107 rounded-full border-emerald-500  border-8 shadow-2xl hover:-translate-y-2x hover:transition duration-300  flex items-center justify-center">
                <img src="profile.png" className=" lg:w-62 lg:h-64 md:w-100 md:h-105 rounded-full object-full "></img>
            </div>
</div>
        </div>
    );
}


export default Profile;
