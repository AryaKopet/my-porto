'use client'

import { useEffect, useState } from "react"

const words = ["Web Developer", "UI Designer", "Next.js Enthusiast"]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-white text-center">
      <h1 className="text-5xl font-bold text-gray-900">Hi, I'm <span className="text-blue-500">Arya Wijaya</span></h1>
      <p className="text-2xl mt-4 text-gray-600">
        I'm a <span className="font-semibold text-blue-600">{words[index]}</span>
      </p>
    </section>
  )
}
