
function Skills() {
    const skills = ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Figma"];

    return (
        

        <div className="bg-white px-6 py-16 md:px-12 lg:px-20">
            <p className="text-emerald-700 font-semibold">WHAT I KNOW</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-4 text-gray-900">My Skills</h2>
            <p className="text-gray-600 mt-4 text-lg">Technologies I use to build responsive websites.</p>
            <div className="flex flex-wrap gap-5 mt-8 ">
               {skills.map((skill)=>(
                <div key={skill} className="min-w-[200px] bg-green-200  border-2 border-green-300 hover:-translate-y-1.5 transition duration-700s hover:shadow-2xl flex-1 font-semibold text-center py-5 rounded-xl  ">
                    {skill}
               </div>
               ))}
            </div>

        </div>
        
    );
}

export default Skills;


 