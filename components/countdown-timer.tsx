"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex justify-center gap-5 md:gap-10 text-white mt-10">
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-4xl font-light">{timeLeft.days}</div>
        <div className="text-xs md:text-sm tracking-[0.3em] mt-2 opacity-80">DAYS</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-4xl font-light">{timeLeft.hours}</div>
        <div className="text-xs md:text-sm tracking-[0.3em] mt-2 opacity-80">HOURS</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-4xl font-light">{timeLeft.minutes}</div>
        <div className="text-xs md:text-sm tracking-[0.3em] mt-2 opacity-80">MINUTES</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-4xl font-light">{timeLeft.seconds}</div>
        <div className="text-xs md:text-sm tracking-[0.3em] mt-2 opacity-80">SECONDS</div>
      </div>
    </div>
  )
}

