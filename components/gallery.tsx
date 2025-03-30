"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

// Sample gallery images - replace with your actual images
const galleryImages = [
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "カップルの写真1",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "カップルの写真2",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "カップルの写真3",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "カップルの写真4",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "カップルの写真5",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "カップルの写真6",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "next" | "prev") => {
    if (selectedImage === null) return

    if (direction === "next") {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    } else {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>

          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>

          <button
            className="absolute left-8 text-white hover:text-gray-300 transition-colors text-lg tracking-widest"
            onClick={() => navigateImage("prev")}
          >
            PREV
          </button>

          <button
            className="absolute right-8 text-white hover:text-gray-300 transition-colors text-lg tracking-widest"
            onClick={() => navigateImage("next")}
          >
            NEXT
          </button>
        </div>
      )}
    </div>
  )
}

