'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

type Certificate = {
  title: string;
  issuer: string;
  image: string;
  link: string;
};

const certificates: Certificate[] = [
  {
    title: "Backend Golang Certification",
    issuer: "Dicoding Indonesia",
    image: "/images/certificates/dibimbing-golang.jpg",
    link: "https://www.dicoding.com/certificates/1234567890",
  },
  {
    title: "Alibaba Cloud Generative AI",
    issuer: "Alibaba Cloud",
    image: "/images/certificates/alibaba-generative-ai.jpg",
    link: "https://coursera.org/certificate/abcdefg123",
  },
  {
    title: "VSGA Junior Web Developer",
    issuer: "BPSDM Kominfo",
    image: "/images/certificates/vsga.jpg",
    link: "https://aws.training/cert/xyz987654321",
  },
  {
    title: "Javascript Fundamental",
    issuer: "Code Politan",
    image: "/images/certificates/Javascript_arya.jpg",
    link: "https://freecodecamp.org/certificate/sample123",
  },
  {
    title: "Road to Fullstack Developer",
    issuer: "Sinau Koding",
    image: "/images/certificates/sinau_koding.png",
    link: "https://www.sololearn.com/certificates/ABC123456",
  },
  {
    title: "Back-End Development Path",
    issuer: "Codecademy",
    image: "/images/portofolio.png",
    link: "https://www.codecademy.com/profiles/sample",
  },
  {
    title: "Front-End Web Development",
    issuer: "FreeCodeCamp",
    image: "/images/portofolio.png",
    link: "https://freecodecamp.org/certificate/sample123",
  },
  {
    title: "Javascript Intermediate",
    issuer: "SoloLearn",
    image: "/images/portofolio.png",
    link: "https://www.sololearn.com/certificates/ABC123456",
  },
  {
    title: "Back-End Development Path",
    issuer: "Codecademy",
    image: "/images/portofolio.png",
    link: "https://www.codecademy.com/profiles/sample",
  },
];

const ITEMS_PER_PAGE = 3;

export default function Certificates() {
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const totalPages = Math.ceil(certificates.length / ITEMS_PER_PAGE);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setDirection(1);
    setPageIndex((prev) => (prev + 1) % totalPages);
  };

  const prev = () => {
    setDirection(-1);
    setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true,
  });

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      next();
    }, 5000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [pageIndex]);

  const paginatedCerts = certificates.slice(
    pageIndex * ITEMS_PER_PAGE,
    pageIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <section className="my-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Certificates</h2>

      <div className="relative max-w-6xl mx-auto overflow-hidden pb-12" {...handlers}>
        <div className="relative h-full">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={pageIndex}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {paginatedCerts.map((cert, index) => (
                <div
                  key={index}
                  onClick={() => setPopupImage(cert.image)}
                  className="group cursor-pointer bg-white dark:bg-neutral-900 p-4 rounded-xl shadow-md hover:shadow-xl transition-transform hover:scale-105"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-40 object-cover rounded-md mb-4 group-hover:opacity-90 transition"
                  />
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > pageIndex ? 1 : -1);
                setPageIndex(i);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === pageIndex
                  ? 'bg-blue-500 scale-125'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
              }`}
            ></button>
          ))}
        </div>

        {/* Popup Image */}
        <AnimatePresence>
          {popupImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPopupImage(null)}
            >
              <motion.img
                src={popupImage}
                alt="Popup Certificate"
                className="max-w-3xl max-h-[80vh] rounded-lg shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
