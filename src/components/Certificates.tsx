// components/Certificates.tsx
'use client';

import { useState } from 'react';

type Certificate = {
  title: string;
  issuer: string;
  image: string;
  link: string;
};

const certificates: Certificate[] = [
  {
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    image: "https://storage.googleapis.com/dicoding-certificate/dummy-cert-1.png",
    link: "https://www.dicoding.com/certificates/1234567890",
  },
  {
    title: "React Developer Certification",
    issuer: "Meta via Coursera",
    image: "https://res.cloudinary.com/demo/image/upload/v1700000000/react-cert.png",
    link: "https://coursera.org/certificate/abcdefg123",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    image: "https://d1.awsstatic.com/training-and-certification/certification-badges/awscertifiedcloudpractitioner.7b6bce7ec1df3c16f50c50cbee3b518f7e35d72d.png",
    link: "https://aws.training/cert/xyz987654321",
  },
  {
    title: "Front-End Web Development",
    issuer: "FreeCodeCamp",
    image: "https://design-style-guide.freecodecamp.org/downloads/fcc_primary_small.jpg",
    link: "https://freecodecamp.org/certificate/sample123",
  },
  {
    title: "Javascript Intermediate",
    issuer: "SoloLearn",
    image: "https://api2.sololearn.com/v2/certificates/image/ABC123456.png",
    link: "https://www.sololearn.com/certificates/ABC123456",
  },
  {
    title: "Back-End Development Path",
    issuer: "Codecademy",
    image: "https://cdn-images.codecademy.com/certificates/sample.png",
    link: "https://www.codecademy.com/profiles/sample",
  },
];

const ITEMS_PER_PAGE = 3;

export default function Certificates() {
  const [pageIndex, setPageIndex] = useState(0);

  const totalPages = Math.ceil(certificates.length / ITEMS_PER_PAGE);

  const next = () => {
    setPageIndex((prev) => (prev + 1) % totalPages);
  };

  const prev = () => {
    setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const paginatedCerts = certificates.slice(
    pageIndex * ITEMS_PER_PAGE,
    pageIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <section className="my-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Sertifikat</h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Tombol prev */}
        {totalPages > 1 && (
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            &lt;
          </button>
        )}

        {/* Sertifikat */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {paginatedCerts.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-neutral-900 p-4 rounded-xl shadow-md hover:shadow-xl transition-transform hover:scale-105"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 object-cover rounded-md mb-4 group-hover:opacity-90 transition"
              />
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
            </a>
          ))}
        </div>

        {/* Tombol next */}
        {totalPages > 1 && (
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            &gt;
          </button>
        )}
      </div>
    </section>
  );
}
