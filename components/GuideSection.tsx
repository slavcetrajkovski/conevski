import Image from "next/image"
import { useTranslations } from "next-intl"
import { BlobShape } from "@/components/BlobShape"
import { BrandButton } from "@/components/BrandButton"

export function GuideSection() {
  const t = useTranslations("guide")

  return (
    <div className="relative py-24 sm:py-32 overflow-hidden px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">

        <div className="w-full md:w-1/2 relative h-[380px] sm:h-[500px]">
          <BlobShape variant="1" color="red" className="absolute bottom-10 right-10 w-48 h-48 opacity-90 z-0" />
          <BlobShape variant="2" color="yellow" className="absolute inset-0 opacity-80 z-10 scale-90 -translate-x-4" />
          <div className="absolute inset-0 z-20 blob-shape-1 overflow-hidden shadow-2xl scale-95">
            <Image
              src="/images/female_lawyer_1775138280240.png"
              alt="Legal Professional"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-start gap-8 z-30">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight whitespace-pre-line">
            {t("heading")}
          </h2>
          <p className="text-sm text-brand-brown font-medium max-w-sm leading-relaxed">
            {t("description")}
          </p>
          <div className="mt-2 flex items-center gap-4">
            <BrandButton label={t("cta")} href="#contact" />
            <div className="w-12 h-[1px] bg-brand-red" />
          </div>
        </div>

      </div>
    </div>
  )
}
