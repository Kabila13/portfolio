import { useState } from "react";

function Heart() {
    const [liked, setLiked] = useState(false);

    return (
        <button
            onClick={() => {
                if (liked) {
                    setLiked(false);
                } else {
                    setLiked(true);
                }
            }}
            className={`material-symbols-outlined ${
                liked
                    ? "text-red-500 [font-variation-settings:'FILL'_1]"
                    : "text-white [font-variation-settings:'FILL'_0]"
            }`}
        >
            favorite
        </button>
    );
}



function Destination() {
    

    return (
        <div className="lg:flex gap-0  ">
            <div>
                <div className="flex mt-10 gap-5 md:justify-center">
                    <input type="search" placeholder="Search destinations..." className=" border-white rounded-full py-2 px-5 lg:w-130 md:w-100 shadow-lg"></input>

                    <select className="shadow-lg w-50 px-5" >
                        <option value="All destination">All Destination</option>
                        <option value=" India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                    </select>
                </div>
                <div className="md:place-items-center ">
                    <h2 className=" mb-3 mt-5 font-bold text-blue-900 text-2xl">Popular Destinations</h2>
                    <div className=" flex flex-wrap lg:w-250 md:justify-evenly">
                        <div className="pb-5 md:w-150 pr-2 lg:w-110 relative shadow-sm rounded-2xl">
                            <img src="./Bali.png" className=" md:w-150 lg:w-110 h-60 rounded-t-2xl object-cover" ></img>
                            <div className="absolute top-2 right-5">
                            <Heart />
                            </div>

                            <div className="pl-4 pt-2 text-gray-500 ">
                                <h3 className=" text-blue-900 text-2xl font-bold">Bali</h3>
                                <p className="inline-flex p-1 "><span className="material-symbols-outlined ">
                                    location_on
                                </span>indonesia</p>
                                <div >
                                    <p className=" w-85">tropical beaches, lush landscapes and a rich heritage make Bail a paradise for travellers</p>
                                    <button className=" border-1 p-2 mt-2 px-2 transition-colors duration-900s rounded-full border-blue-500 font-bold text-blue-600 shadow-sm hover:bg-blue-600 hover:text-white inline-flex items-center">View Details<span className="material-symbols-outlined">
                                        arrow_forward
                                    </span></button>
                                </div>
                            </div>
                        </div><div className=" lg:w-110 md:w-150 relative shadow-sm rounded-2xl">
                            <img src="./swiss.png" className="lg:w-110 md:w-150 h-60 rounded-t-2xl object-fit" ></img>
                             <div className="absolute top-2 right-5">
                            <Heart />
                            </div>

                            <div className="pl-4 pt-2 pb-3 text-gray-500">
                                <h3 className=" text-blue-900 text-2xl font-bold">Swiss Alps</h3>
                                <p className="inline-flex p-1 "><span className="material-symbols-outlined ">
                                    location_on
                                </span>Switzerland</p>
                                <div>
                                    <p className=" w-85 ">The highest point in Switzerland is Dufourspitze, the highest summit of the Monte Rosa massif</p>
                                    <button className=" border-1 px-2 p-2 mt-2 transition-colors duration-900s rounded-full border-blue-500 font-bold text-blue-600 shadow-sm hover:bg-blue-600 hover:text-white inline-flex items-center">View Details<span className="material-symbols-outlined">
                                        arrow_forward
                                    </span></button>
                                </div>
                            </div>
                        </div>
                        <div className=" lg:w-110 md:w-150 relative shadow-sm rounded-2xl">
                            <img src="./paris.png" className="lg:w-110 md:w-150 h-60 rounded-t-2xl object-fit" ></img>
                             <div className="absolute top-2 right-5">
                            <Heart />
                            </div>

                            <div className="pl-4 pt-2 pb-3 text-gray-500">
                                <h3 className=" text-blue-900 text-2xl font-bold">Paris</h3>
                                <p className="inline-flex p-1 "><span className="material-symbols-outlined ">
                                    location_on
                                </span>France</p>
                                <div>
                                    <p className=" w-85"> you can see the top highlights of Paris in 2 days<br /> if you plan your time carefully.</p>
                                    <button className=" p-2 mt-2 border-1 px-2 inline-flex items-center transition-colors duration-900s rounded-full border-blue-500 font-bold text-blue-600 shadow-sm hover:bg-blue-600 hover:text-white">View Details <span className="material-symbols-outlined">
                                        arrow_forward
                                    </span></button>
                                </div>
                            </div>
                        </div>
                        <div className=" lg:w-110 md:w-150 relative shadow-sm rounded-2xl">
                            <img src="./Maldives.png" className="lg:w-110 md:w-150 h-60 rounded-t-2xl object-fit" ></img>

                             <div className="absolute top-2 right-5">
                            <Heart />
                            </div>

                            <div className="pl-4 pt-2 text-gray-500">
                                <h3 className=" text-blue-900 text-2xl font-bold">Maldives</h3>
                                <p className="inline-flex p-1 "><span className="material-symbols-outlined ">
                                    location_on
                                </span>Indian Ocean</p>
                                <div >
                                    <p className=" w-85">a curated selection of Maldives and romantic rizz lines inspired by the islands.</p>
                                    <button className=" border-1 p-2 mt-2 px-2 inline-flex items-center rounded-full border-blue-500 font-bold text-blue-600 shadow-sm hover:bg-blue-600 hover:text-white transition-colors duration-900s">View Details<span className="material-symbols-outlined">
                                        arrow_forward
                                    </span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" shadow-lg xl:h-200 2xl:w-300 2xl:h-300 4xl:h-200 relative rounded-b-2xl hidden xl:block">
                <img src="Bali.png" className=" w-400 rounded-2xl "></img>
                <div className="flex">
                    <span className="material-symbols-outlined text-white absolute top-3 left-3">
                        arrow_back_ios
                    </span>
                    <p className="text-white absolute top-3 left-10 text-md">
                        Back to destination
                    </p>
                    <span className="material-symbols-outlined text-white absolute top-3 right-15">
                        close
                    </span><span className="material-symbols-outlined bg-white rounded-full p-1 absolute text-red-500 top-2 right-3" >
                        favorite</span>
                </div>
                <div className="py-2 px-5  ">
                    <h3 className=" text-blue-900 text-2xl font-bold">Bali</h3>
                    <p className="inline-flex p-1 "><span className="material-symbols-outlined ">
                        location_on
                    </span>indonesia</p>
                    <p className="pb-5 pt-2 flex"><span className="material-symbols-outlined text-yellow-400">
                        star
                    </span>4.8 (2.4k reviews)</p>
                    <div className="flex">
                        <p className=" w-90">Bali was the host of Miss World 2013 (63rd edition of the Miss World pageant). It was the first time Indonesia hosted an international beauty pageant. In 2022, Bali also co-hosted Miss Grand International 2022 along with Jakarta, West Java, and Banten.</p>

                    </div>
                    <div className="flex items-center ">
                        <div className="p-1 inline-flex items-center gap-2  flex-1">
                            <span className="material-icons-outlined ">
                                calendar_month
                            </span><div>
                                <p className="text-sm">Best time </p>
                                <p className="text-sm">Apr-Oct</p>
                            </div>
                        </div>
                        <div className=" p-1 inline-flex items-center gap-2 flex-1">
                            <span className="material-icons-outlined ">
                                flight_takeoff
                            </span><div>
                                <p className="text-sm">flight Duration</p>
                                <p className="text-sm">16th (from US) </p>
                            </div>
                        </div>
                        <div className=" p-1 inline-flex items-center gap-1 flex-1 ">
                            <span className="material-icons-outlined">
                                light_mode
                            </span><div>
                                <p className="text-sm">Average Temperature</p>
                                <p className="text-sm">26C- 32C</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-blue-900 text-xl font-bold py-3">Top Attractions</h2>
                        <div className="flex gap-17">
                            <p className="inline-flex items-center gap-2"><span className="material-icons-outlined text-blue-500" >
                                done_outline
                            </span>Uluwatu Temple</p>
                            <p className="inline-flex items-center gap-2"><span className="material-icons-outlined text-blue-500">
                                done_outline
                            </span>Seminyak Beach </p>
                        </div>
                        <div className="flex gap-2">
                            <p className="inline-flex items-center gap-2"><span className="material-icons-outlined text-blue-500">
                                done_outline
                            </span>Tegallalang Rice Terraces</p>
                            <p className="inline-flex items-center gap-2"><span className="material-icons-outlined text-blue-500">
                                done_outline
                            </span>Ubud Monkey Forest</p>
                        </div>

                        <button className=" bg-blue-600  rounded-full py-2  m-6  px-22 text-white">Book This Destination</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Destination;