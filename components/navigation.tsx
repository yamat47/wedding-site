"use client"

import { useState, useEffect } from "react"
import { Link as ScrollLink } from "react-scroll"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // ヒーローセクションの高さを取得
      const heroSection = document.getElementById("hero")
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight
        // ヒーローセクションを超えたらナビゲーションを表示
        setIsVisible(window.scrollY >= heroHeight - 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { id: "date", label: "日時" },
    { id: "access", label: "アクセス" },
    { id: "schedule", label: "式次第" },
    { id: "family-requests", label: "親族へのお願い" },
    { id: "couple-profile", label: "新郎新婦" },
    { id: "gallery", label: "アルバム" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-serif",
        isVisible
          ? "opacity-100 translate-y-0 bg-white/95 backdrop-blur-sm py-3 shadow-sm"
          : "opacity-0 -translate-y-full",
      )}
    >
      <nav className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center gap-1 sm:gap-10 text-sm tracking-widest">
          {navLinks.map((link) => (
            <li key={link.id}>
              <ScrollLink
                to={link.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className="px-3 py-2 cursor-pointer inline-block transition-colors text-stone-700 hover:text-stone-400 uppercase font-sans text-xs tracking-[0.25em]"
              >
                {link.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

