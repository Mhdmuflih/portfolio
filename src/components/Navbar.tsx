import { useEffect, useState } from "react";

const sections = ["home", "about", "experience", "projects", "skills", "education", "contact"];

const Navbar = () => {
    const [active, setActive] = useState("home");
    // const [open, setOpen] = useState(false);

    const toggleTheme = () => {
        const root = document.documentElement;
        root.classList.toggle("dark");
        const isDark = root.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    };

    const scrollTo = (id: string) => {
        setActive(id);   // <-- ith add cheyyuka (instant color change)
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
        // setOpen(false);
    };


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full fixed top-0 left-0 z-50">
            <div className="flex items-center justify-center mt-6 px-4">

                {/* Navbar */}
                <div className=" bg-slate-600 w-full max-w-[800px] border border-white rounded-2xl sm:rounded-full flex flex-col sm:flex-row items-center gap-2 sm:justify-around px-5 py-2  text-white ">
                    {sections.map((item) => (
                        <span
                            key={item}
                            onClick={() => scrollTo(item)}
                            className={`px-4 py-1 rounded-full cursor-pointer capitalize transition-all duration-300 ${active === item ? "bg-yellow-400 text-black" : "hover:text-yellow-400"} `} >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Theme Toggle */}
                <div className="text-white text-2xl cursor-pointer ml-4">
                    <label className="relative inline-block w-11 h-6 cursor-pointer">
                        <input
                            type="checkbox"
                            onChange={toggleTheme}
                            className="peer sr-only"
                        />
                        <span className="absolute inset-0 bg-gray-400 rounded-full transition peer-checked:bg-yellow-400"></span>
                        <span className="absolute top-1/2 left-0.5 -translate-y-1/2 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-full"></span>
                    </label>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
