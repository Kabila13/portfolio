function Projects() {
  const Projects = [
    {
      name: "Decentralized AI Document Verification System",
      image: "/dc.png",
      description: "A secure document verification system that combines Artificial Intelligence and Blockchain technology to detect document forgery and prevent identity theft.",
      tools: ["python", "Flask", "Ethereum", "Solidity", "AI"],
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
  
  ]
  return (
    <div id="projects" className=" md:px-10 py-20 lg:px-20 bg-gray-50">
      <p className="font-semibold text-green-700 "> VIEW MY WORK</p>
      <h2 className="md:py-2 lg:py-4 font-extrabold text-3xl">PROJECTS</h2>
      <p className="text-gray-800 text-lg ">My projects and their details</p>
      
      
      
      <div className="flex flex-wrap gap-6 pt-8">


        {Projects.map((item) => (
          
          <div key={item} 
          className=" border-2 rounded-xl hover:shadow-xl hover:-translate-y-0 hover:transition duration-600 border-gray-300 flex-1 min-w-[260px] bg-white p-3">
           
            <img src={item.image} className="rounded-md"></img>
           
            <p 
            className="pt-3 font-bold text-xl text-green-800 text-center">
              {item.name}</p>
            
            <p 
            className="text-gray-500 text-center pt-3">
              {item.description}</p>
            
            <div className="flex gap-3 flex-wrap justify-center mt-10" >
           
            {item.tools.map((tool) =>(
              
              <div key={tool} className=" bg-green-200 shadow-sm hover:-translate-0.5 rounded-xl py-1 text-sm  text-gray-700 font-semibold px-4  text-center" >{tool}</div>
            ))}

            </div>
              
            
          </div>
          
        ))}
      </div>
    </div>
  )
}
export default Projects;