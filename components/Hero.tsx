"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { LawWatermark } from "@/components/LawWatermark"
import { BlobShape } from "@/components/BlobShape"
import { BrandButton } from "@/components/BrandButton"

export function Hero() {
  const t = useTranslations("hero")
  const containerRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.from(headlineRef.current, { y: 50, opacity: 0, duration: 1.2 })
        .from(".hero-element", { y: 30, opacity: 0, duration: 0.8, stagger: 0.2 }, "-=0.8")
        .from(".hero-image", { scale: 0.9, opacity: 0, duration: 1.5, ease: "power2.out" }, "-=1.2")
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <LawWatermark className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block" />

      <BlobShape variant="1" color="red" className="absolute left-[30%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] z-0 opacity-90 hero-image mix-blend-multiply" />
      <BlobShape variant="2" color="yellow" className="absolute right-[20%] top-[40%] z-0 opacity-80 mix-blend-multiply w-[300px] h-[300px] hero-image" />

      <div className="hidden md:block absolute bottom-[10%] right-[15%] z-20 hero-image animate-pulse [animation-duration:8s]">
        <div className="relative w-48 h-48">
          <Image
            src="/images/wood_gavel.png"
            alt="Wooden Gavel"
            fill
            sizes="192px"
            className="object-contain drop-shadow-2xl mix-blend-multiply"
            priority
          />
        </div>
      </div>

      {/* Mobile statue — absolute backdrop, bottom-right */}
      <div className="absolute bottom-0 right-[-5%] w-[62vw] h-[75vh] z-0 md:hidden hero-image">
        <Image
          src="/images/statue_lady_justice.png"
          alt="Lady Justice Statue"
          fill
          sizes="62vw"
          className="object-contain object-bottom drop-shadow-[-10px_10px_20px_rgba(0,0,0,0.3)] mix-blend-multiply"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl mx-auto items-center gap-8 md:gap-0">
        <div className="w-full md:w-[45%] z-20 text-left md:text-left">
          <h1
            ref={headlineRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-foreground leading-[1.05] whitespace-pre-line"
          >
            {t("headline")}
          </h1>
          <div className="mt-10 hero-element flex items-center gap-4 justify-start">
            <BrandButton label={t("cta")} href="#contact" className="py-5" />
            <div className="w-12 h-[1px] bg-brand-red hidden md:block" />
          </div>
        </div>

        {/* Desktop statue — inline in flex row */}
        <div className="hidden md:flex md:w-[55%] justify-center md:-ml-10 z-20 hero-image">
          <div className="relative w-[500px] h-[750px]">
            <Image
              src="/images/statue_lady_justice.png"
              alt="Lady Justice Statue"
              fill
              sizes="500px"
              className="object-contain drop-shadow-[-10px_10px_20px_rgba(0,0,0,0.4)] mix-blend-multiply"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
