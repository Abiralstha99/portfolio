
function Navbar() {
    return (
        <nav className='font-[Cinzel]'>
            <div className="flex justify-end">
                <ul className="min-h-7 md:flex space-x-16" >
                    <li><a href="#home" style={{ color: "#66D9EF" }} className="">Home</a></li>
                    <li><a href="#about" style={{ color: "#F92672" }}>About</a></li>
                    <li><a href="#projects" style={{ color: "#E6DB74" }}>Projects</a></li>
                    <li><a href="#contact" style={{ color: "#F8F8F2" }}>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar