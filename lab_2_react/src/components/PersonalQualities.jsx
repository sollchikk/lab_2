function PersonalQualities() {
    const qualities = [
        "Responsible and reliable",
        "Strong communication skills",
        "Analytical thinking",
        "Attention to detail",
        "Fast learner"
    ];

    return (
        <section className="bg-white p-[20px] border-2 border-[#f2b6cc] rounded-[10px] h-full shadow-sm hover:shadow-md transition-shadow duration-300 group">
            <h2 className="mt-0 text-[24px] font-bold text-[#a64d79] border-b-2 border-[#f2b6cc] pb-[5px] mb-5 uppercase tracking-tight">
                Personal Qualities
            </h2>

            <ul className="space-y-3 text-[#4a3a40]">
                {qualities.map((quality, index) => (
                    <li key={index} className="flex items-center gap-3 group/item">
                        {/* Кастомний маркер у формі ромба або квадрата */}
                        <span className="h-2 w-2 bg-[#c94f7c] rotate-45 group-hover/item:scale-125 transition-transform duration-200"></span>

                        <span className="font-medium group-hover/item:text-[#a64d79] transition-colors">
                            {quality}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default PersonalQualities;