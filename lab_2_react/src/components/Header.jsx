function Header() {
    return (
        <header className="w-full bg-[#f8d7e3] text-center p-[25px] border-b-[3px] border-[#e6a8c3]">
            <h1 className="m-0 text-[34px] font-bold text-[#a64d79]">
                Solomiia Onofriichuk
            </h1>
            <p className="text-[#4a3a40] mt-[5px]">Cybersecurity Student | Lviv, Ukraine</p>
            <p className="mt-[5px] text-[#4a3a40]">
                Email: <a href="mailto:solya@gmail.com" className="text-[#c94f7c] hover:underline">
                    solya@gmail.com
                </a>
            </p>
        </header>
    );
}
export default Header;