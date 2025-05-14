'use client';

type Tool = {
  name: string;
  image: string;
  link: string;
};

const tools: Tool[] = [
  {
    name: "Next.js",
    image: "/images/tools/nextjs.png",
    link: "https://nextjs.org/",
  },
  {
    name: "React",
    image: "/images/tools/react.png",
    link: "https://reactjs.org/",
  },
  {
    name: "Tailwind CSS",
    image: "/images/tools/tailwind.png",
    link: "https://tailwindcss.com/",
  },
  {
    name: "GitHub",
    image: "/images/tools/github.png",
    link: "https://github.com/",
  },
  {
    name: "Firebase",
    image: "/images/tools/firebase.png",
    link: "https://firebase.google.com/",
  },
  {
    name: "Figma",
    image: "/images/tools/figma.png",
    link: "https://figma.com/",
  },
];

export default function Tools() {
  return (
    <section className="my-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Tools Pengembangan</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {tools.map((tool, index) => (
          <a
            key={index}
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-neutral-900 rounded-2xl p-4 shadow-md hover:shadow-xl transition-transform transform hover:scale-105 flex items-center justify-center"
          >
            <img
              src={tool.image}
              alt={tool.name}
              className="w-16 h-16 object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
