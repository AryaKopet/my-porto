'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type ProjectProps = {
  title: string
  description: string
  image: string
  link: string
}

const projects: ProjectProps[] = [
  {
    title: "Personal Portofolio",
    description: "Website portofolio responsif modern dengan menggunakan teknologi Next.js dan Tailwind CSS.",
    image: "/images/projects/web_portofolio.png",
    link: "https://contoh.com/portofolio",
  },
  {
    title: "Kalkulator Konversi Suhu ",
    description: "Sistem ini merupakah sebuah mini project yang saya kerjakan dalam free class saya di Revou Fundamental Course. Sistem ini saya buat menggunakan HTML, CSS, dan JavaScript.",
    image: "/images/projects/kalkulator.png",
    link: "https://revou-fundamental-course.github.io/19-may-25-AryaKopet/",
  },
  {
    title: "Dashboard Admin",
    description: "Dashboard dengan fitur manajemen user dan grafik data.",
    image: "/images/portofolio.png",
    link: "https://contoh.com/dashboard",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null)

  return (
    <section id="projects" className="my-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 bg-white dark:bg-neutral-900"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4 text-left">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 line-clamp-3 overflow-hidden text-ellipsis">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pop-up Card */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-neutral-900 p-10 rounded-2xl max-w-5xl w-full shadow-2xl relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              onClick={(e) => e.stopPropagation()}
              >
              <div className="flex flex-col md:flex-row gap-8 min-h-[400px]">
                {/* Gambar */}
                <div className="w-full md:w-1/2 aspect-video relative overflow-hidden rounded-xl">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Konten */}
                <div className="text-left flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                    <div className="mt-4 max-h-40 overflow-y-auto pr-2">
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>
                  </div>

                  {/* Tombol CTA */}
                  <div className="mt-6">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
                    >
                      🔗 Kunjungi Proyek
                    </a>
                  </div>
                </div>
              </div>

              {/* Tombol close */}
              <button
                className="absolute top-4 right-6 text-2xl text-gray-500 hover:text-red-500"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
