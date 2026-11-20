
function Education() {
    const education = [
        {
            role: "Secondary School",
            company: "Holy Redeemer's Matriculation School, Bhavanisagar",
            duration: "2019 - 2020",
            percentage: "Percentage : 88%",
            status: "SSLC",
        },
        {
            role: "Higher secondary School",
            company: "Vijayalakshmi Matriculation Hr.sec School, Sirumugai",
            duration: "2021 - 2022",
            percentage: "Percentage : 85%",
            status: "HSC",
        },
        {
            role: "B.E. Computer Science and Engineering",
            company: "Christ the King Engineering College, Karamadai",
            duration: "2022 - 2026",
            percentage: "CGPA : 8.5",
            status: "College",
        },
    ];

    return (
        <div className="bg-gray-50 px-5 sm:px-8 md:px-12 lg:px-20 py-12 md:py-16">

            <p className="font-semibold text-emerald-700 text-sm sm:text-base"> MY ACADEMIC BACKGROUND</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">Education</h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600">My academic journey and technical foundation.</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {education.map((item) => (
                    <div key={item.role} className="rounded-xl border border-green-100 bg-white p-5 sm:p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                        <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-emerald-800"> {item.status}</span>
                        <h3 className="mt-4 text-lg sm:text-xl font-bold text-gray-900">{item.role}</h3>
                        <p className="mt-2 font-semibold text-emerald-700 break-words">{item.company}</p>
                        <p className="mt-1 text-sm text-gray-500">{item.duration}</p>
                        <p className="mt-4 leading-7 text-gray-600">{item.percentage}</p>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Education;
