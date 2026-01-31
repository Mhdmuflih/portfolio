import profile from "../assets/profile.jpg";
import SocialLinks from "./SocialLink";
import { AnimatePresence, motion } from "framer-motion";
import avathar from "../assets/muflih-avatar.png";
import { useEffect, useState } from "react";

const images = [profile, avathar];

const Profile = () => {

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 7000); // 4 seconds

        return () => clearInterval(interval);
    }, []);


    return (
        <section id="home" className="relative flex flex-col items-center justify-center mt-40 px-4 text-center">

            {/* Left Glow */}
            <div className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-60 h-60 sm:w-72 sm:h-72 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-30"></div>

            {/* Right Glow */}
            <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-60 h-60 sm:w-72 sm:h-72 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-30"></div>

            {/* Animated Profile Image */}
            <div className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={current}
                        src={images[current]}
                        className="absolute w-full h-full rounded-full object-cover border-4 border-white shadow-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2 }} // slow smooth fade
                    />
                </AnimatePresence>
            </div>

            {/* Social Media Link */}
            <SocialLinks />

            {/* Text Content */}
            <div className="relative z-10 mt-8 space-y-3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                    Hi, I'm{" "}
                    <span className="font-bold text-red-500">
                        Muhammed Muflih K K
                    </span>
                </h1>

                <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300">
                    MERN Stack Developer
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl">
                    I build scalable web applications using{" "}
                    <span className="text-white">React, Node.js, Express & MongoDB</span>.
                    Passionate about <span className="text-white">Microservices, NestJS </span>
                    and solving real-world problems with clean architecture.
                </p>
            </div>


            <div className="w-full flex justify-center my-20">
                <div className="h-[1px] w-2/3 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            </div>


        </section>
    );
};

export default Profile;
