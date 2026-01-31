import mockInterview from "../assets/mock interview.png";
import collectionManagement from "../assets/collection management system.png";
import e_commerce from "../assets/e-commerce.png";

const Projects = () => {
    return (
        <>
            <div id="projects" className="flex justify-center mt-20 px-6">
                <div className="max-w-6xl w-full text-white">

                    <h1 className="text-3xl font-bold text-center mb-10">
                        Projects
                    </h1>

                    {/* Horizontal Projects */}
                    <div className="flex flex-wrap gap-8 justify-center">

                        {/* CARD 1 */}
                        <div className="relative w-[350px] h-[350px] rounded-xl overflow-hidden group shadow-lg">
                            <img src={mockInterview}
                                className="w-full h-full object-cover" />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/70 
                translate-y-[65%] group-hover:translate-y-0 
                transition-all duration-500 p-6">

                                <h2 className="text-xl font-bold mb-1">
                                    Mock Interview Platform - MockBS
                                </h2>
                                <p className="text-yellow-400 mb-3">
                                    Full Stack Microservices Application
                                </p>

                                <p className="text-sm mb-3">
                                    A real-time mock interview platform where users can book interviews,
                                    attend video sessions, chat with interviewers, and manage subscriptions.
                                </p>

                                <ul className="text-sm list-disc list-inside space-y-1 mb-3">
                                    <li>WebRTC video interviews</li>
                                    <li>Socket.IO chat</li>
                                    <li>JWT & Stripe</li>
                                    <li>Cloudinary & emails</li>
                                </ul>

                                <div className="flex gap-3 mt-3">
                                    <a href="https://mock-bs.muflih.online/" className="bg-yellow-400 text-black px-3 py-1 rounded">
                                        Live
                                    </a>
                                    <a href="https://github.com/Mhdmuflih/mockBS" className="border px-3 py-1 rounded">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="relative w-[350px] h-[350px] rounded-xl overflow-hidden group shadow-lg">
                            <img src={e_commerce}
                                className="w-full h-full object-cover" />

                            <div className="absolute inset-0 bg-black/70 translate-y-[65%] group-hover:translate-y-0 transition-all duration-500 p-6">

                                <h2 className="text-xl font-bold mb-1">
                                    E-Commerce Platform - Kiona
                                </h2>
                                <p className="text-yellow-400 mb-3">
                                    Full Stack Web Application
                                </p>

                                <p className="text-sm mb-3">
                                    A complete e-commerce platform with authentication, admin dashboard,
                                    payments, and order management.
                                </p>

                                <p className="text-sm mb-3">
                                    Role: End-to-end full stack development.
                                </p>

                                <div className="flex gap-3 mt-3">
                                    <a href="#" className="bg-yellow-400 text-black px-3 py-1 rounded">
                                        Live
                                    </a>
                                    <a href="https://github.com/Mhdmuflih/Kiona" className="border px-3 py-1 rounded">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>


                        {/* CARD 3 */}
                        <div className="relative w-[350px] h-[350px] rounded-xl overflow-hidden group shadow-lg">
                            <img src={collectionManagement}
                                className="w-full h-full object-cover" />

                            <div className="absolute inset-0 bg-black/70 
                translate-y-[65%] group-hover:translate-y-0 
                transition-all duration-500 p-6">

                                <h2 className="text-xl font-bold mb-1">
                                    Collections Management System
                                </h2>
                                <p className="text-yellow-400 mb-3">
                                    High Performance Backend API
                                </p>

                                <p className="text-sm mb-3">
                                    A scalable backend system built to handle large volumes of users
                                    and financial transactions with optimized performance.
                                </p>

                                <p className="text-sm mb-3">
                                    Role: Solo backend engineer. Designed, built, optimized, deployed.
                                </p>

                                <div className="flex gap-3 mt-3">
                                    <a href="#" className="bg-yellow-400 text-black px-3 py-1 rounded">
                                        Live
                                    </a>
                                    <a href="https://github.com/Mhdmuflih/Collections-Management-Backend-System" className="border px-3 py-1 rounded">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full flex justify-center my-20">
                <div className="h-[1px] w-2/3 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            </div>
        </>
    )
}

export default Projects
