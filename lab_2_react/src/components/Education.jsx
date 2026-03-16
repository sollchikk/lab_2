function Education() {
    return (
        <section className="bg-white p-[20px] border-2 border-[#f2b6cc] rounded-[10px] shadow-sm hover:shadow-md hover:border-[#a64d79] transition-all duration-300 group">
            <h2 className="mt-0 text-[24px] font-bold text-[#a64d79] border-b-2 border-[#f2b6cc] pb-[5px] mb-4 text-left uppercase tracking-tight group-hover:tracking-wider transition-all">
                Education
            </h2>

            <div className="space-y-3 border-l-4 border-pink-50 pl-4 group-hover:border-[#f2b6cc] transition-colors">
                <p className="text-[#4a3a40] m-0 leading-tight">
                    <span className="font-bold text-lg text-[#a64d79]">Lviv Polytechnic National University</span>
                    <br />
                    <span className="text-sm font-medium opacity-80 uppercase tracking-tighter">— Bachelor’s Degree</span>
                </p>

                <p className="text-[#7a4c5f] m-0 italic font-medium">
                    Specialization: Cybersecurity
                </p>

                <p className="text-[#4a3a40] m-0 text-xs font-bold uppercase tracking-widest opacity-60">
                    Lviv, Ukraine
                </p>
            </div>
        </section>
    );
}

export default Education;