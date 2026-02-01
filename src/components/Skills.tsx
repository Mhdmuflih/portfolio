import {
    FaReact, FaNodeJs, FaDocker, FaGitAlt,
    FaFigma, FaLinux, FaEnvelope,
    FaCubes,
    FaProjectDiagram,
    FaSitemap
} from "react-icons/fa";

import {
    SiTypescript, SiRedux, SiTailwindcss, SiBootstrap,
    SiExpress, SiNestjs, SiMongodb, SiPostgresql,
    SiFirebase, SiRedis, SiKubernetes, SiGooglecloud,
    SiJenkins, SiGithubactions,
    SiRabbitmq, SiApachekafka,
    SiWebrtc, SiSocketdotio,
    SiStripe, SiRazorpay, SiCloudinary,
    SiPostman,
    SiJavascript,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import Section from "./Section";
import Skill from "./Skill";



const Skills = () => {
    return (
        <div id="skill" className="max-w-6xl mx-auto px-6 text-white scroll-mt-32">
            <h1 className="text-3xl font-bold text-center mb-12">
                Skills
            </h1>

            <Section title="Programming Languages">
                <Skill icon={SiJavascript} name="JavaScript" />
                <Skill icon={SiTypescript} name="TypeScript" />
            </Section>


            <Section title="Frontend Development">
                <Skill icon={FaReact} name="React.js" />
                <Skill icon={SiTypescript} name="TypeScript" />
                <Skill icon={SiRedux} name="Redux" />
                <Skill icon={SiTailwindcss} name="Tailwind CSS" />
                <Skill icon={SiBootstrap} name="Bootstrap" />
            </Section>

            <Section title="Backend Development">
                <Skill icon={FaNodeJs} name="Node.js" />
                <Skill icon={SiExpress} name="Express.js" />
                <Skill icon={SiNestjs} name="NestJS" />
            </Section>

            <Section title="Databases">
                <Skill icon={SiMongodb} name="MongoDB" />
                <Skill icon={SiPostgresql} name="PostgreSQL" />
                <Skill icon={SiFirebase} name="Firebase" />
                <Skill icon={SiRedis} name="Redis" />
            </Section>

            <Section title="DevOps & Cloud">
                <Skill icon={FaDocker} name="Docker" />
                <Skill icon={SiKubernetes} name="Kubernetes" />
                <Skill icon={SiGithubactions} name="GitHub Actions" />
                <Skill icon={SiJenkins} name="Jenkins" />
                <Skill icon={SiGooglecloud} name="GCP" />
            </Section>

            <Section title="Architecture & Principles">
                <Skill icon={FaCubes} name="Microservices Architecture" />
                <Skill icon={FaProjectDiagram} name="MVC Architecture" />
                <Skill icon={FaSitemap} name="Repository Pattern" />
                <Skill icon={FaSitemap} name="SOLID Principles" />
            </Section>


            <Section title="System & Architecture">
                <Skill icon={SiRabbitmq} name="RabbitMQ" />
                <Skill icon={SiApachekafka} name="Kafka" />
                <Skill icon={SiGooglecloud} name="gRPC" />
            </Section>

            <Section title="Real-Time & Integrations">
                <Skill icon={SiWebrtc} name="WebRTC" />
                <Skill icon={SiSocketdotio} name="Socket.IO" />
                <Skill icon={SiStripe} name="Stripe" />
                <Skill icon={SiRazorpay} name="Razorpay" />
                <Skill icon={SiCloudinary} name="Cloudinary" />
                <Skill icon={FaEnvelope} name="Nodemailer" />
            </Section>

            <Section title="Testing & Tools">
                <Skill icon={SiPostman} name="Postman" />
                <Skill icon={FaGitAlt} name="Git" />
                <Skill icon={FaFigma} name="Figma" />
                <Skill icon={VscCode} name="VS Code" />
                <Skill icon={FaLinux} name="Linux (basics)" />
            </Section>

            {/* Divider */}
            <div className="w-full flex justify-center my-20">
                <div className="h-[1px] w-2/3 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            </div>

        </div>
    );
};

export default Skills;
