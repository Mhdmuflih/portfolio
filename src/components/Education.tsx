import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa";

const Education = () => {
    return (
        <div id="education" className="max-w-5xl mx-auto px-6 text-white">
            <h1 className="text-3xl font-bold text-center mb-12">
                Education
            </h1>

            <div className="relative border-l-2 border-yellow-400 pl-8 space-y-10">

                {/* Brototype */}
                <div className="relative">
                    <div className="absolute -left-[38px] top-1 bg-yellow-400 p-2 rounded-full">
                        <FaGraduationCap className="text-black" />
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-700 transition">
                        <h2 className="text-xl font-semibold text-yellow-400">
                            Brototype
                        </h2>
                        <p className="text-sm text-gray-400 mb-2">Present</p>
                        <p className="text-gray-300">
                            Built hands-on projects applying theoretical knowledge to full-stack development.
                        </p>
                    </div>
                </div>

                {/* College */}
                <div className="relative">
                    <div className="absolute -left-[38px] top-1 bg-yellow-400 p-2 rounded-full">
                        <FaUniversity className="text-black" />
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-700 transition">
                        <h2 className="text-xl font-semibold text-yellow-400">
                            NMSM Govt. College Kalpetta
                        </h2>
                        <p className="text-sm text-gray-400 mb-1">
                            University of Calicut
                        </p>
                        <p className="text-sm text-gray-400 mb-2">
                            B.Sc. Computer Science (2019 – 2022)
                        </p>
                    </div>
                </div>

                {/* School */}
                <div className="relative">
                    <div className="absolute -left-[38px] top-1 bg-yellow-400 p-2 rounded-full">
                        <FaSchool className="text-black" />
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-700 transition">
                        <h2 className="text-xl font-semibold text-yellow-400">
                            GVHSS Chathamangalam
                        </h2>
                        <p className="text-sm text-gray-400 mb-2">
                            Higher Secondary (Computer Science & IT)
                        </p>
                        <p className="text-sm text-gray-400">
                            2017 – 2019
                        </p>
                    </div>
                </div>

            </div>
            {/* Divider */}
            <div className="w-full flex justify-center my-20">
                <div className="h-[1px] w-2/3 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            </div>
        </div>
    );
};

export default Education;
