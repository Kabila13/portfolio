function Hero(){
    return(
        <div className=" h-80 bg-[url('./bg.png')] bg-fit bg-center bg-black/40">
            <div className="h-full bg-gradient-to-r from-[#00345C] to-transparent pt-22 pl-20">

            <h1 className=" text-white text-6xl font-bold">Explore the World</h1>
            <p className=" text-white w-100 py-4">Discover breathtaking destinations, create unforgettable memories,  and start your next adventure with wanderly</p>
            <button className=" text-white bg-blue-500 py-3 px-5 inline-flex items-center rounded-full">Explore Destinations<span class="material-symbols-outlined">
arrow_forward
</span></button>
            </div>
        </div>
    )
}

export default Hero;

