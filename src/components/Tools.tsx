'use client';

type Tool = {
  name: string;
  image: string;
  link: string;
};

const tools: Tool[] = [
  {
    name: "Laravel",
    image: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
    link: "https://laravel.com/",
  },
  {
    name: "React",
    image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    link: "https://reactjs.org/",
  },
  {
    name: "Express.js",
    image: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
    link: "https://expressjs.com/",
  },
  {
    name: "Next.js",
    image: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
    link: "https://nextjs.org/",
  },
  {
    name: "TypeScript",
    image: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Golang",
    image: "../images/go-logo-1.svg",
    link: "https://go.dev/",
  },
  {
    name: "Tailwind CSS",
    image: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Bootstrap",
    image: "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg",
    link: "https://getbootstrap.com/",
  },
  {
    name: "Node.js",
    image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    link: "https://nodejs.org/",
  },
  {
    name: "MongoDB",
    image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    link: "https://www.mongodb.com/",
  },
  {
    name: "Prisma ORM",
    image: "https://cdn.worldvectorlogo.com/logos/prisma-3.svg",
    link: "https://www.prisma.io/",
  },
  {
    name: "Docker",
    image: "../images/docker-4.svg",
    link: "https://www.docker.com/",
  },
];

export default function Tools() {
  return (
    <section className="my-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">During Learning</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {tools.map((tool, index) => (
          <a
            key={index}
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-transform duration-300 transform hover:scale-110 hover:rotate-1 flex flex-col items-center justify-center"
          >
            <img
              src={tool.image}
              alt={tool.name}
              className="w-16 h-16 object-contain mb-3 brightness-75 group-hover:brightness-100 group-hover:animate-pulse transition"
            />
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{tool.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
