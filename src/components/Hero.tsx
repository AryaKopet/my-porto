'use client'

import { useEffect, useState } from "react"
import "../styles/globals.css"

const words = ["Web Developer", "UI Designer", "Next.js Enthusiast"]

export default function Hero() {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    if (index === words.length) return

    const timeout = setTimeout(() => {
      setText(words[index].substring(0, subIndex))

      if (!deleting) {
        if (subIndex < words[index].length) {
          setSubIndex(prev => prev + 1)
        } else {
          setTimeout(() => setDeleting(true), 1500)
        }
      } else {
        if (subIndex > 0) {
          setSubIndex(prev => prev - 1)
        } else {
          setDeleting(false)
          setIndex(prev => (prev + 1) % words.length)
        }
      }
    }, deleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [subIndex, index, deleting])

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(prev => !prev)
    }, 500)
    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-[85vh] px-6 md:px-20 pt-20 md:pt-24 overflow-hidden bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">

      {/* Animasi Latar Belakang Gradient */}
      <div className="absolute inset-0 -z-10 bg-[length:400%_400%] bg-gradient-to-r from-blue-300 via-purple-200 to-pink-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 animate-[gradient_8s_ease_infinite]" />

      {/* TEKS KIRI */}
      <div className="text-center md:text-left md:w-1/2 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Hi, I&apos;m <span className="text-blue-500 dark:text-blue-400">Arya Wijaya</span>
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-gray-600 dark:text-gray-300">
          I&apos;m a{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            {text}
            <span className="border-r-2 border-blue-600 ml-1 dark:border-blue-400">
              {blink ? " " : ""}
            </span>
          </span>
        </p>
        <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-md">
          Membangun pengalaman digital yang modern dan efisien melalui teknologi web yang handal dan desain yang menarik.
        </p>
      </div>

      {/* AVATAR KANAN */}
      <div className="mb-10 md:mb-0 md:ml-12 md:w-1/2 flex justify-center z-10">
        <img
          src="/images/avatar.jpg"
          alt="Arya Avatar"
          className="w-72 h-72 md:w-80 md:h-80 rounded-full shadow-2xl border-4 border-blue-200 object-cover animate-float"
        />
      </div>
    </section>
  )
}
