
function Projects() {
    const Projects = [
        {
            name: "Decentralized AI Document Verification System",
            image: "/dc.png",
            description: "A secure document verification system that combines Artificial Intelligence and Blockchain technology to detect document forgery and prevent identity theft.",
            tools: ["Python", "Flask", "Ethereum", "Solidity", "AI"],
        },
        {
            name: "Ticket Booking System",
            image: "/movie.png",
            description: "A user-friendly Ticket Booking System that allows users to browse events, check availability, select seats, and book tickets online. The system provides a simple and responsive interface for a smooth booking experience.",
            tools: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "Vite"],
        },
        {
            name: "Medical Appointment Tracking System",
            image: "/md.png",
            description: "A web-based design that shows patients to schedule and reschedule medical appointments, track appointment details, and receive reminders.",
            tools: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "Vite"],
        },
        {
            name: "Product cart",
            image: "/crud.png",
            description: "Developed a responsive Product Cart application using React.js and Tailwind CSS with Firebase Firestore for CRUD operations and Cloudinary for product image uploads.",
            tools: ["React.js", "Tailwind CSS", "JavaScript", "Firestore", "Cloudinary"],
            link: "https://crudoperation-539b2habf-kabila13s-projects.vercel.app",
        },
    ];

    return (
        <div id="projects" className="px-5 sm:px-8 md:px-10 lg:px-20 py-12 md:py-16 lg:py-20 bg-gray-50">

            <p className="font-semibold text-green-700 text-sm sm:text-base">VIEW MY WORK</p>

            <h2 className="py-3 font-extrabold text-3xl sm:text-4xl">PROJECTS</h2>

            <p className="text-gray-800 text-base sm:text-lg">My projects and their details</p>

          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                {Projects.map((item) => (
                    <div key={item.name} className="border-2 rounded-xl hover:shadow-xl hover:-translate-y-1 transition duration-300 border-gray-300 bg-white p-4 flex flex-col">
                        <img src={item.image} alt={item.name} className="w-full h-48 sm:h-52 object-cover rounded-md"/>
                        <p className="pt-4 font-bold text-lg sm:text-xl text-green-800 text-center">{item.name}</p>
                        <p className="text-gray-500 text-sm sm:text-base text-center pt-3 leading-7">{item.description}</p>
                        <div className="flex gap-2 flex-wrap justify-center mt-6">
                            {item.tools.map((tool) => (
                                <div key={tool} className="bg-green-200 shadow-sm hover:-translate-y-0.5 transition rounded-xl py-1 text-sm text-gray-700 font-semibold px-3 text-center">
                                    {tool}
                                </div>
                            ))}
                        </div>

                        {item.link && (
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-center mt-auto pt-6">
                                <span className="block bg-emerald-700 hover:bg-emerald-900 transition text-white font-semibold p-3 rounded-xl">
                                    Live Demo
                                </span>
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
