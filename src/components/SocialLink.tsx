import { FaLinkedin, FaGithub, FaMedium, FaCode } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-8 justify-center mt-7 text-3xl">

      {/* LinkedIn */}
      <div className="relative group">
        <a
          href="https://www.linkedin.com/in/muhammed-muflih-k-k-37435b2b6/"
          target="_blank"
          className="text-gray-400 hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
        <span className="
          absolute -bottom-10 left-1/2 -translate-x-1/2
          scale-0 group-hover:scale-100
          bg-black text-white text-xs px-3 py-1 rounded
          transition
        ">
          LinkedIn
        </span>
      </div>

      {/* GitHub */}
      <div className="relative group">
        <a
          href="https://github.com/Mhdmuflih"
          target="_blank"
          className="text-gray-400 hover:text-white transition"
        >
          <FaGithub />
        </a>
        <span className="
          absolute -bottom-10 left-1/2 -translate-x-1/2
          scale-0 group-hover:scale-100
          bg-black text-white text-xs px-3 py-1 rounded
          transition
        ">
          GitHub
        </span>
      </div>

      {/* LeetCode */}
      <div className="relative group">
        <a
          href="https://leetcode.com/u/mhdmuflihkk/"
          target="_blank"
          className="text-gray-400 hover:text-yellow-400 transition"
        >
          <FaCode />
        </a>
        <span className="
          absolute -bottom-10 left-1/2 -translate-x-1/2
          scale-0 group-hover:scale-100
          bg-black text-white text-xs px-3 py-1 rounded
          transition
        ">
          LeetCode
        </span>
      </div>

      {/* Medium */}
      <div className="relative group">
        <a
          href="https://medium.com/@mhdmuflihkk"
          target="_blank"
          className="text-gray-400 hover:text-green-400 transition"
        >
          <FaMedium />
        </a>
        <span className="
          absolute -bottom-10 left-1/2 -translate-x-1/2
          scale-0 group-hover:scale-100
          bg-black text-white text-xs px-3 py-1 rounded
          transition
        ">
          Medium
        </span>
      </div>

    </div>
  );
};

export default SocialLinks;
