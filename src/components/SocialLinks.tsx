// components/SocialLinks.tsx
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <section className="my-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Temui Saya di</h2>
      <div className="flex justify-center gap-8 text-3xl text-gray-500">
        <a
          href="https://github.com/username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-800 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-700 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}
