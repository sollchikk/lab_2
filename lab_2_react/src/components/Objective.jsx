function Objective() {
    return (
        <section className="bg-white p-[20px] border-2 border-[#f2b6cc] rounded-[10px] shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 group">
            {/* Заголовок з ефектом розширення при наведенні */}
            <h2 className="mt-0 text-[24px] font-bold text-[#a64d79] border-b-2 border-[#f2b6cc] pb-[5px] mb-[15px] uppercase tracking-tight group-hover:tracking-normal transition-all">
                Objective
            </h2>

            {/* Текст з виділенням ключових слів */}
            <p className="text-[#4a3a40] leading-relaxed text-[17px]">
                Cybersecurity student at <strong className="text-[#a64d79] font-extrabold decoration-[#f2b6cc] decoration-2 underline-offset-4 hover:underline transition-all">
                    Lviv Polytechnic National University
                </strong>, passionate about <span className="text-[#c94f7c] font-medium">OSINT</span>,
                <span className="text-[#c94f7c] font-medium"> threat analysis</span>, and
                <span className="text-[#c94f7c] font-medium"> cloud security</span>.
                Seeking an internship to apply theoretical knowledge to practical projects.
            </p>
        </section>
    );
}

export default Objective;