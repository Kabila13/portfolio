
function Internships() {
    const internships = [
        {
            role: "Full stack Developer Intern",
            company: "Creaviq Technologies pvt Ltd",
            duration: "2026",
            description:
                "Learning to build responsive websites using HTML, CSS, JavaScript, React.js and Tailwind CSS with Backend.",
            status: "Currently Learning",
        },
        {
            role: "XML",
            company: "Vivos Ordy",
            duration: "2025",
            description:
                "Structured and vatidated XML datasets for backend data interchange, improving document processing reliablity for downstream systems.",
            status: "Completed",
        },
        {
            role: "Front End Development",
            company: "Binary Spot Technology",
            duration: "2023",
            description:
                "Practicing Html, css, responsive layouts and interactive UI design.",
            status: "Completed",
        },
        {
            role: "UI/UX",
            company: "Internpe",
            duration: "2024",
            description:
                "Exploring and learning Figma, Canva responsive layouts and interactive UI design for the website.",
            status: "Completed",
        },
        
    ];

    return (
        <section className="bg-gray-50 px-6 py-16 md:px-12 lg:px-20">
            <p className="font-semibold text-emerald-700">
                MY EXPERIENCE
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold ">
                Internships
            </h2>

            <p className="mt-4 text-lg text-gray-600">
                My learning journey and professional experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
                {internships.map((intern) => (
                    <div
                        key={intern.role}
                        className="flex-1 min-w-[260px] rounded-xl  border-green-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                    >
                        <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-emerald-800">
                            {intern.status}
                        </span>

                        <h3 className="mt-4 text-xl font-bold text-gray-900">
                            {intern.role}
                        </h3>

                        <p className="mt-2 font-semibold text-emerald-700">
                            {intern.company}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                            {intern.duration}
                        </p>

                        <p className="mt-4 leading-7 text-gray-600">
                            {intern.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Internships;
