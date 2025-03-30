import Image from "next/image"
import { Gallery } from "@/components/gallery"
import { Timeline } from "@/components/timeline"
import { CountdownTimer } from "@/components/countdown-timer"
import { Navigation } from "@/components/navigation"
import { Access } from "@/components/access"
import { GatheringTimes } from "@/components/gathering-times"
import { FamilyRequests } from "@/components/family-requests"
import { CoupleProfile } from "@/components/couple-profile"

export default function Home() {
  // Wedding details
  const weddingDate = "2025年4月13日"
  const weddingLocation = "FISH BANK TOKYO"

  return (
    <main className="flex min-h-screen flex-col items-center font-serif">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative w-full h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="結婚式のカバー画像"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30 z-5"></div>
        <div className="relative z-10 text-center text-white space-y-8 px-4 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl tracking-[0.3em] uppercase opacity-90">Wedding Invitation</p>
          <h1 className="text-4xl md:text-6xl font-light tracking-wider font-display">
            <span className="block mb-6">山口 拓弥</span>
            <span className="block text-base md:text-lg tracking-[0.5em] uppercase opacity-80 my-4 font-serif">&</span>
            <span className="block mt-6">潮田 麻衣</span>
          </h1>
          <div className="w-16 h-px bg-white/60 mx-auto my-10"></div>
          <p className="text-xl md:text-2xl tracking-wider">{weddingDate}</p>
          <p className="text-lg md:text-xl tracking-wide opacity-90">@ {weddingLocation}</p>
          <CountdownTimer targetDate="2025-04-13T12:00:00" />
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="py-28 w-full bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-light mb-20 text-center tracking-widest uppercase text-stone-800 font-display">
            会場へのアクセス
          </h2>
          <Access />
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-28 w-full">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-light mb-20 text-center tracking-widest uppercase text-stone-800 font-display">
            式次第
          </h2>
          <Timeline />
        </div>
      </section>

      {/* Family Requests Section */}
      <section id="meeting-time" className="py-28 w-full bg-stone-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-light mb-20 text-center tracking-widest uppercase text-stone-800 font-display">
            集合時間
          </h2>
          <GatheringTimes />
        </div>
      </section>

      {/* Family Requests Section */}
      <section id="family-requests" className="py-28 w-full bg-stone-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-light mb-20 text-center tracking-widest uppercase text-stone-800 font-display">
            親族へのお願い
          </h2>
          <FamilyRequests />
        </div>
      </section>

      {/* Couple Profile Section */}
      <section id="couple-profile" className="py-28 w-full">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-light mb-20 text-center tracking-widest uppercase text-stone-800 font-display">
            新郎新婦について
          </h2>
          <CoupleProfile />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-28 w-full bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-light mb-20 text-center tracking-widest uppercase text-stone-800 font-display">
            思い出のアルバム
          </h2>
          <Gallery />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-16 text-center bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-light mb-4 tracking-wide font-display">山口 拓弥 & 潮田 麻衣</h2>
          <p className="mb-6 text-stone-600">{weddingDate}</p>
          <div className="w-16 h-px bg-stone-300 mx-auto my-10"></div>
          <p className="text-sm text-stone-500 tracking-wide">お問い合わせ: takuya.mai.0628@gmail.com</p>
        </div>
      </footer>
    </main>
  )
}

