'use client'

import { useEffect, useState } from "react"

export default function Navbar() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    // Cek tema yang disimpan di localStorage dan terapkan pada halaman
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
      setDark(true)
    } else {
      document.documentElement.classList.remove("dark")
      setDark(false)
    }
  }, [])

  const toggleDarkMode = () => {
    const newTheme = dark ? "light" : "dark"

    // Mengubah tema dengan menambah/menanggalkan class "dark"
    document.documentElement.classList.toggle("dark")

    // Menyimpan tema ke localStorage
    localStorage.setItem("theme", newTheme)

    // Memperbarui state untuk mengubah ikon
    setDark(!dark)
  }

  return (
    <nav className="flex items-center justify-between px-4 py-3 shadow-md dark:bg-neutral-900">
      <h1 className="text-xl font-bold">My Personal Portfolio</h1>
      <button
        onClick={toggleDarkMode}
        className="text-xl hover:opacity-75 transition"
      >
        {dark ? "🌙" : "☀️"}
      </button>
    </nav>
  )
}
