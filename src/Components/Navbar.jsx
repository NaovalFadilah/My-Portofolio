import { useState, useEffect } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/90 backdrop-blur-md border-b border-gray-100"
                : "bg-transparent"
                }`}
        >
            <nav className="max-w-6xl mx-auto px-6 lg:px-20 h-20 flex items-center justify-between">

                {/* ===================== LOGO ===================== */}
                <a
                    href="#"
                    className={`text-xl font-bold tracking-tight transition ${isScrolled ? "text-black" : "text-black"
                        }`}
                >
                    Naoval<span className="text-gray-400">. TechWorks</span>
                </a>


                {/* ===================== DESKTOP MENU ===================== */}
                <div className="hidden md:flex items-center gap-8">

                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm text-gray-600 hover:text-black transition"
                        >
                            {item.name}
                        </a>
                    ))}

                    <a
                        href="#contact"
                        className="ml-2 px-5 py-2.5 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition"
                    >
                        Let's Talk
                    </a>

                </div>


                {/* ===================== MOBILE BUTTON ===================== */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col gap-1.5"
                    aria-label="Toggle menu"
                >

                    <span
                        className={`w-6 h-0.5 bg-black transition ${isOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    />

                    <span
                        className={`w-6 h-0.5 bg-black transition ${isOpen ? "opacity-0" : ""
                            }`}
                    />

                    <span
                        className={`w-6 h-0.5 bg-black transition ${isOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    />

                </button>

            </nav>


            {/* ===================== MOBILE MENU ===================== */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">

                    <div className="px-6 py-6 flex flex-col gap-5">

                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-600 hover:text-black transition"
                            >
                                {item.name}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="w-fit px-5 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition"
                        >
                            Let's Talk
                        </a>

                    </div>

                </div>
            )}

        </header>
    );
};

export default Navbar;