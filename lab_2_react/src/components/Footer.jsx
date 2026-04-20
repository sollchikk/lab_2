import { useState, useEffect } from "react";

function Footer() {
    const [systemInfo, setSystemInfo] = useState("");

    useEffect(() => {
       
        const osInfo = navigator.platform;
        const browserInfo = navigator.userAgent;
        const combinedInfo = `ОС: ${osInfo} | Браузер: ${browserInfo}`;

       
        localStorage.setItem("reactUserSystemData", combinedInfo);

        const savedData = localStorage.getItem("reactUserSystemData");
        setSystemInfo(savedData);
    }, []);

    return (
        <footer className="w-full text-center bg-[#f8d7e3] p-[12px] border-t-[3px] border-[#e6a8c3] mt-[30px]">
            <p className="m-0 text-[#4a3a40]">© 2026 Solomiia Onofriichuk</p>

            
            {systemInfo && (
                <p className="mt-2 text-xs text-[#4a3a40]">
                    Ваша система: {systemInfo}
                </p>
            )}
        </footer>
    );
}

export default Footer;