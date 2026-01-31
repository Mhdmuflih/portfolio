import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";


const Contact = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value });
    };

    const handleToSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const toastId = toast.loading("Sending message...");

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAIL_SERVICE,
                import.meta.env.VITE_EMAIL_TEMPLATE,
                {
                    name: form.name,
                    email: form.email,
                    subject: form.subject,
                    message: form.message
                },
                import.meta.env.VITE_EMAIL_PUBLIC
            );

            toast.success("Message sent successfully!", { id: toastId });
            setForm({ name: "", email: "", message: "", subject: "" });
        } catch (error) {
            console.error(error);
            toast.error("Failed to send message", { id: toastId });
        }
    }

    return (
        <div id="contact" className="max-w-6xl mx-auto px-6 text-white">
            <h1 className="text-3xl font-bold text-center mb-12">
                Contact Me
            </h1>

            <div className="grid md:grid-cols-2 gap-10">

                {/* Left Side - Info */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-yellow-400">
                        Let’s work together
                    </h2>

                    <p className="text-gray-300 leading-relaxed">
                        I’m open to full-time roles, freelance projects, and collaboration opportunities.
                        Feel free to reach out if you want to discuss a project or just connect.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-yellow-400" />
                            <span>mhdmuflihkk@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaPhoneAlt className="text-yellow-400" />
                            <span>+91 8136885449</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-yellow-400" />
                            <span>Kerala, India</span>
                        </div>
                    </div>

                    {/* <div className="flex gap-5 mt-6">
                        <a href="https://github.com/yourusername" target="_blank" className="hover:text-yellow-400 transition">
                            <FaGithub size={28} />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-yellow-400 transition">
                            <FaLinkedin size={28} />
                        </a>
                    </div> */}
                </div>

                {/* Right Side - Form */}
                <form className="bg-gray-800 p-8 rounded-xl space-y-5 shadow-lg" onSubmit={handleToSubmit}>
                    <div>
                        <label className="block mb-1 text-sm">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full bg-gray-700 p-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full bg-gray-700 p-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            className="w-full bg-gray-700 p-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Subject"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm">Message</label>
                        <textarea
                            rows={5}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            className="w-full bg-gray-700 p-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Tell me about..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-300 transition"
                    >
                        Send Message
                    </button>
                </form>

            </div>

            {/* Divider */}
            <div className="w-full flex justify-center my-20">
                <div className="h-[1px] w-2/3 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            </div>

            {/* Footer */}
            <div className="flex justify-center pb-10">
                <p className="text-gray-400 text-sm">
                    © 2026 Muhammed Muflih K K — Built with React & Tailwind
                </p>
            </div>

        </div>
    );
};

export default Contact;
