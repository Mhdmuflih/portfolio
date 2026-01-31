const About = () => {
    return (
        <>
            <div id="about" className="flex justify-center mt-10 px-6">
                <div className="max-w-3xl text-center text-white">

                    <h1 className="text-3xl font-bold mb-6">
                        About Me
                    </h1>

                    <p className="text-lg leading-relaxed mb-4">
                        I am <span className="text-yellow-400 font-semibold">Muhammed Muflih K K</span>,
                        a passionate Full Stack Developer with around 2 years of experience in building
                        scalable and user-friendly web applications.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        I specialize in the <span className="text-yellow-400">MERN stack</span> (MongoDB,
                        Express, React, Node.js) along with TypeScript, and I have hands-on experience with
                        Microservices Architecture, NestJS, Docker, and Kubernetes.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        I have worked on real-world projects including an E-commerce platform and a
                        Mock Interview system, where I was responsible for both frontend and backend development.
                    </p>

                    <p className="text-lg leading-relaxed">
                        I enjoy solving complex problems, writing clean code, and continuously learning
                        new technologies. My goal is to grow as a software engineer and contribute to
                        building impactful digital products.
                    </p>

                    <p className="text-lg leading-relaxed mt-4">
                        I have experience taking products from idea to production, handling the complete lifecycle
                        including design, development, testing, documentation, deployment, and maintenance.
                    </p>


                </div>
            </div>

            {/* Divider line */}
            <div className="w-full flex justify-center my-20">
                <div className="h-[1px] w-2/3 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            </div>
        </>
    )
}

export default About;
