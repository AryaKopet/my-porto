import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Footer() {
  return (
    <>
      {/* FOOTER ATAS */}
      <footer className="bg-gray-200 dark:bg-[#1f2937] text-gray-700 dark:text-gray-300 border-t border-transparent mt-20 px-6 py-10 relative overflow-hidden">
        {/* Border gradasi atas */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-blue-800 to-zinc-900" />

        <AnimateOnScroll>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 relative z-10">
            {/* KIRI - Navigasi */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm font-medium">
              <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
              <a href="#certificates" className="hover:text-blue-500 transition-colors">Certificates</a>
              <a href="#learning" className="hover:text-blue-500 transition-colors">During Learning</a>
              {/* <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a> */}
            </div>

            {/* KANAN - Sosial Media */}
            <div className="flex gap-4 text-lg">
              <a
                href="https://github.com/AryaKopet"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-300 dark:bg-gray-700 p-2 rounded-full hover:bg-blue-500 hover:text-white transition-all"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/arya-wijaya-762911285"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-300 dark:bg-gray-700 p-2 rounded-full hover:bg-blue-500 hover:text-white transition-all"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aryasokker23@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-300 dark:bg-gray-700 p-2 rounded-full hover:bg-blue-500 hover:text-white transition-all"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </footer>

      {/* FOOTER BAWAH */}
      <div className="bg-gray-800 dark:bg-black text-center py-4 text-xs text-gray-200 dark:text-gray-400">
        © {new Date().getFullYear()} <span className="font-semibold text-white dark:text-white">Arya Wijaya</span>. All rights reserved.
      </div>
    </>
  );
}
