function TechnicalSkills() {
    const skills = [
        "Programming: C, C#, Python",
        "Cloud security (AWS)",
        "OSINT fundamentals",
        "Information security",
        "Git (basic)",
        "Linux (basic)"
    ];

    return (
        <section className="bg-white p-[20px] border-2 border-[#f2b6cc] rounded-[10px] h-full shadow-sm hover:shadow-md transition-all duration-300 group">
            <h2 className="mt-0 text-[24px] font-bold text-[#a64d79] border-b-2 border-[#f2b6cc] pb-[5px] mb-5 uppercase tracking-tight">
                Technical Skills
            </h2>

            {}
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-3 py-1.5 bg-[#fdeff4] text-[#a64d79] text-sm font-semibold rounded-full border border-[#f2b6cc] hover:bg-[#a64d79] hover:text-white hover:scale-110 transition-all duration-200 cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}

export default TechnicalSkills;