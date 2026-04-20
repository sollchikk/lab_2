import React, { useState, useEffect } from "react";

export default function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-black/40 z-[998] backdrop-blur-[2px] transition-opacity duration-500"
                onClick={() => setIsOpen(false)}
            />
            <div
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-[25px] border-2 border-[#f2b6cc] 
rounded-[10px] shadow-2xl z-[999] w-full max-w-[350px] animate-in fade-in zoom-in duration-300"
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="bg-[#a64d79] text-white px-[14px] py-[6px] rounded-[5px] font-bold text-[14px] mb-[15px] hover:bg-[#c94f7c] transition-colors shadow-sm"
                >
                    Close
                </button>
                <h3 className="text-[22px] font-bold text-[#a64d79] border-b-2 border-[#f2b6cc] pb-[5px] mb-[15px] uppercase tracking-tight">
                    Leave a Feedback
                </h3>

                <form action="https://formspree.io/f/xlgobozg" method="POST" className="flex flex-col gap-[10px]">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        className="w-full p-[10px] border border-gray-300 rounded-[5px] text-[14px] focus:border-[#a64d79] outline-none transition-all"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="w-full p-[10px] border border-gray-300 rounded-[5px] text-[14px] focus:border-[#a64d79] outline-none transition-all"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                        className="w-full p-[10px] border border-gray-300 rounded-[5px] text-[14px] focus:border-[#a64d79] outline-none transition-all"
                    />
                    <textarea
                        name="message"
                        placeholder="Your feedback"
                        required
                        className="w-full p-[10px] border border-gray-300 rounded-[5px] text-[14px] focus:border-[#a64d79] outline-none transition-all min-h-[80px] resize-y"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-[#a64d79] text-white px-[16px] py-[10px] rounded-[5px] font-bold text-[15px] hover:bg-[#c94f7c] transition-all shadow-md w-fit mt-[5px]"
                    >
                        Send
                    </button>
                </form>
            </div>
        </>
    );
}