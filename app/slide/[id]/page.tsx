"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { slideComponents } from "@/components/slides"
import { useRouter } from "next/navigation"
import { notFound } from "next/navigation"

interface SlidePageProps {
  params: {
    id: string
  }
}

export default function SlidePage({ params }: SlidePageProps) {
  const router = useRouter()
  const slideNumber = parseInt(params.id)
  const currentSlide = slideNumber - 1

  // Validate slide number
  if (isNaN(slideNumber) || slideNumber < 1 || slideNumber > slideComponents.length) {
    notFound()
  }

  const nextSlide = () => {
    if (currentSlide < slideComponents.length - 1) {
      router.push(`/slide/${slideNumber + 1}`)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      router.push(`/slide/${slideNumber - 1}`)
    }
  }

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slideComponents.length) {
      router.push(`/slide/${index + 1}`)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(e.key)) {
        e.preventDefault()
        e.stopPropagation()

        switch (e.key) {
          case "ArrowRight":
          case "ArrowDown":
          case " ":
            nextSlide()
            break
          case "ArrowLeft":
          case "ArrowUp":
            prevSlide()
            break
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      e.stopPropagation()

      if (e.deltaY > 0) {
        nextSlide()
      } else if (e.deltaY < 0) {
        prevSlide()
      }
    }

    document.addEventListener("wheel", handleWheel, { passive: false })
    return () => document.removeEventListener("wheel", handleWheel)
  }, [currentSlide])

  const CurrentSlideComponent = slideComponents[currentSlide]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="text-base sm:text-lg font-display font-semibold text-primary">SILIC.ONE</div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <span className="text-xs sm:text-sm text-muted-foreground">
              {slideNumber} / {slideComponents.length}
            </span>

            <div className="flex items-center space-x-1 sm:space-x-2">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="p-1.5 sm:p-2 rounded-lg bg-card border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted transition-colors"
              >
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              </button>

              <button
                onClick={nextSlide}
                disabled={currentSlide === slideComponents.length - 1}
                className="p-1.5 sm:p-2 rounded-lg bg-card border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted transition-colors"
              >
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 sm:pt-20 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="min-h-[calc(100vh-8rem)] sm:min-h-[80vh] flex items-center justify-center">
            <div className="w-full max-w-6xl">
              <CurrentSlideComponent />
            </div>
          </div>
        </div>
      </main>

      {/* Progress Indicators */}
      <div className="fixed right-4 sm:right-6 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col items-center space-y-1.5 sm:space-y-2 bg-card/90 backdrop-blur-sm rounded-full px-1.5 sm:px-2 py-3 sm:py-4 border border-border shadow-lg">
          {slideComponents.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-200 ${
                index === currentSlide ? "bg-primary scale-125" : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}