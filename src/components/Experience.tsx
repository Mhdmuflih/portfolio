const Experience = () => {
  return (
    <>
      <div id="experience" className="flex justify-center mt-10 px-6">
        <div className="max-w-4xl text-center text-white">

          <h1 className="text-3xl font-bold mb-2">
            Experience
          </h1>

          <h2 className="text-xl text-yellow-400 mb-6">
            Full Stack Developer — Startup / Product-based Environment
          </h2>

          <p className="text-lg leading-relaxed mb-4">
            I have around 2+ years of experience building scalable, production-ready web applications 
            using modern full-stack technologies.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            I have worked extensively with MERN stack, TypeScript, and microservices architecture, 
            focusing on clean code, performance, and real-world system design.
          </p>

          <p className="text-lg font-semibold mb-4">
            My experience includes:
          </p>

          <ul className="text-left text-lg leading-relaxed list-disc list-inside space-y-2">
            <li>
              Designing and building a Mock Interview Platform using microservices, supporting real-time video interviews, chat, and payments.
            </li>
            <li>
              Developing high-performance backend systems capable of handling 100k+ concurrent users with optimized database queries and caching.
            </li>
            <li>
              Building a complete E-commerce platform with authentication, payments, admin dashboards, and order management.
            </li>
            <li>
              Working with Docker and Kubernetes for containerization and deployment.
            </li>
            <li>
              Implementing CI/CD pipelines, monitoring, logging, and load testing for production systems.
            </li>
            <li>
              Integrating third-party services like Stripe, Razorpay, Cloudinary, Firebase, WebRTC, Redis, RabbitMQ, and gRPC.
            </li>
          </ul>

          <p className="text-lg leading-relaxed mt-6">
            I focus on writing scalable, maintainable code, following best practices like SOLID principles, 
            modular architecture, and clean API design.
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

export default Experience;
