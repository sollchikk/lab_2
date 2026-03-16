function Certificates() {
    return (
        <section className="bg-white p-[20px] border-2 border-[#f2b6cc] rounded-[10px] shadow-sm hover:shadow-md transition-shadow">
            {/* Головний заголовок секції */}
            <h2 className="mt-0 text-[24px] font-bold text-[#a64d79] border-b-2 border-[#f2b6cc] pb-[5px] mb-4 uppercase tracking-tight">
                Certificates & Programs
            </h2>

            {/* Перша програма */}
            <article className="mb-6 group">
                <h3 className="text-[18px] font-bold text-[#a64d79] mb-1 group-hover:text-[#c94f7c] transition-colors">
                    AWS Academy – Cloud Security Foundations
                </h3>
                <p className="text-[#7a4c5f] italic mb-2 text-sm font-medium">
                    Certificate of Completion & Digital Badge (Trained)
                </p>
                <ul className="pl-[18px] list-disc space-y-1 text-[#4a3a40]">
                    <li className="hover:translate-x-1 transition-transform">Security principles in AWS</li>
                    <li className="hover:translate-x-1 transition-transform">Identity and Access Management (IAM)</li>
                    <li className="hover:translate-x-1 transition-transform">Shared responsibility model</li>
                    <li className="hover:translate-x-1 transition-transform">Basic cloud infrastructure protection</li>
                </ul>
            </article>

            {/* Друга програма */}
            <article className="group">
                <h3 className="text-[18px] font-bold text-[#a64d79] mb-1 group-hover:text-[#c94f7c] transition-colors">
                    She Defends: Cyber & OSINT
                </h3>
                <p className="text-[#7a4c5f] italic mb-2 text-sm font-medium">
                    Participant Certificate
                </p>
                <ul className="pl-[18px] list-disc space-y-1 text-[#4a3a40]">
                    <li className="hover:translate-x-1 transition-transform">OSINT investigations</li>
                    <li className="hover:translate-x-1 transition-transform">Cyber threat analysis</li>
                    <li className="hover:translate-x-1 transition-transform">Working with open-source information</li>
                </ul>
            </article>
        </section>
    );
}

export default Certificates;