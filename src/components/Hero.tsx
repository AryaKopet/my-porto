'use client'

import { useEffect, useState } from "react"

const words = ["Web Developer", "UI Designer", "Next.js Enthusiast"]

export default function Hero() {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0) // index kata
  const [subIndex, setSubIndex] = useState(0) // index karakter
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
          // tunggu sebelum mulai menghapus
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
    }, deleting ? 50 : 100) // lebih cepat saat menghapus

    return () => clearTimeout(timeout)
  }, [subIndex, index, deleting])

  // efek berkedip kursor
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(prev => !prev)
    }, 500)
    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-white text-center">
      <h1 className="text-5xl font-bold text-gray-900">
        Hi, I'm <span className="text-blue-500">Arya Wijaya</span>
      </h1>
      <p className="text-2xl mt-4 text-gray-600">
        I'm a{" "}
        <span className="font-semibold text-blue-600">
          {text}
          <span className="border-r-2 border-blue-600 ml-1">
            {blink ? " " : ""}
          </span>
        </span>
      </p>
    </section>
  )
}
