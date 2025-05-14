'use client'

import { motion } from "framer-motion"

type ProjectProps = {
  title: string
  description: string
  image: string
  link: string
}

const projects: ProjectProps[] = [
  {
    title: "Portofolio Website",
    description: "Website portofolio modern dengan Next.js dan Tailwind CSS.",
    image: "/images/portofolio.png",
    link: "https://contoh.com/portofolio",
  },
  {
    title: "Toko Online",
    description: "Aplikasi e-commerce sederhana berbasis React dan Firebase.",
    image: "/images/portofolio.png",
    link: "https://contoh.com/tokoonline",
  },
  {
    title: "Dashboard Admin",
    description: "Dashboard dengan fitur manajemen user dan grafik data.",
    image: "/images/portofolio.png",
    link: "https://contoh.com/dashboard",
  },
]

function ProjectCard({ title, description, image, link }: ProjectProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="block shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 bg-white dark:bg-neutral-900"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}
