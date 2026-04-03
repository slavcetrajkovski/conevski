import Image from "next/image"
import { useTranslations } from "next-intl"
import { Award, Scale, HeadphonesIcon } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { BlobShape } from "@/components/BlobShape"
import { BrandButton } from "@/components/BrandButton"

const SERVICE_ITEMS: { key: "expert" | "clarity" | "support"; icon: LucideIcon }[] = [
  { key: "expert", icon: Award },
  { key: "clarity", icon: Scale },
  { key: "support", icon: HeadphonesIcon },
]

export function ServicesSection() {
  const t = useTranslations("services")

  return (
    <div className="relative py-24 w-full overflow-hidden flex items-center justify-center">

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="absolute inset-y-0 left-0 w-full lg:w-[65%] bg-brand-red rounded-[3rem] lg:[border-radius:64%_36%_41%_59%/50%_64%_36%_50%] shadow-xl opacity-95 z-0" />
        <BlobShape variant="2" color="yellow" className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[50%] h-[600px] opacity-90 shadow-xl mix-blend-multiply hidden lg:block" />

        <div className="relative z-20 flex flex-col lg:flex-row w-full px-6 sm:px-8 md:px-12 py-16 gap-10 lg:gap-0">

          <div className="relative w-full lg:w-1/3 text-white flex flex-col justify-center gap-6 pt-4 lg:pt-10">
            <div className="relative w-fit">
              <h2 className="relative z-10 text-3xl sm:text-4xl md:text-4xl font-bold leading-tight tracking-tight whitespace-pre-line">
                {t("heading")}
              </h2>

              <div className="absolute -right-12 -bottom-4 sm:-right-16 sm:-bottom-6 md:-right-20 md:-bottom-8 lg:-right-24 lg:-bottom-10 z-30 pointer-events-none">
                <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 -rotate-12">
                  <Image
                    src="/images/fountain_pen.png"
                    alt="Fountain Pen"
                    fill
                    sizes="128px"
                    className="object-contain drop-shadow-2xl mix-blend-multiply"
                  />
                </div>
              </div>
            </div>
            <p className="text-sm text-white/80 font-medium max-w-xs leading-relaxed mt-2">
              {t("description")}
            </p>
            <div className="mt-2 flex items-center gap-4">
              <BrandButton label={t("cta")} href="#contact" className="shadow-inner" />
              <div className="w-12 h-[1px] bg-white" />
            </div>
          </div>

          <div className="hidden lg:flex lg:w-1/3 justify-center items-end relative -mb-16 -ml-8">
            <div className="relative w-[500px] h-[650px] rounded-[2.5rem] overflow-hidden">
              <Image
                src="/images/male_lawyer_1775138297810.png"
                alt="Goce Conevski — Advocate"
                fill
                sizes="500px"
                className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] mix-blend-multiply"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col justify-center gap-10 lg:gap-12 lg:pl-12">
            {SERVICE_ITEMS.map(({ key, icon: Icon }) => (
              <div key={key} className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-brand-red mb-1">
                  <div className="bg-brand-red rounded-full p-2">
                    <Icon size={18} className="text-brand-yellow" />
                  </div>
                  <h4 className="font-bold text-foreground text-lg">{t(`${key}.title`)}</h4>
                </div>
                <p className="text-xs text-brand-brown/80 font-medium leading-relaxed">
                  {t(`${key}.description`)}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
