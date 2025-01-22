const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b-2 bg-[#FFFFFF05] text-[#FFFFFF] border-[#FFFFFF]/10">
            <div className="flex h-[72px] items-center px-4 sm:px-10 justify-between">
                <img
                    src="/EDITH_logo_png.png"
                    alt="logo"
                    className="h-10"
                />
                <p className="font-bold text-2xl">
                    Admin
                </p>
            </div>
        </header>
    )
}

export default Header