import Image from "next/image"
import { useTranslations } from "next-intl"

const TESTIMONIALS: { key: "marko" | "elena"; avatar: string }[] = [
  { key: "marko", avatar: "/images/avatar_leslie_1775138342552.png" },
  { key: "elena", avatar: "/images/avatar_randy_1775138357886.png" },
]

export function TestimonialSection() {
  const t = useTranslations("testimonials")

  return (
    <div className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        <div className="lg:col-span-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.1] tracking-tight whitespace-pre-line">
            {t("heading")}
          </h2>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map(({ key, avatar }, index) => (
            <div
              key={key}
              className={`bg-white/80 p-8 sm:p-10 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-white flex flex-col justify-between ${
                index === 0
                  ? "rounded-[3rem] md:[border-radius:41%_59%_31%_69%/60%_41%_59%_40%]"
                  : "rounded-[3rem] md:[border-radius:64%_36%_41%_59%/50%_64%_36%_50%] md:-translate-y-6"
              }`}
            >
              <p className="text-sm font-medium text-brand-brown/80 mb-10 leading-relaxed italic">
                &ldquo;{t(`${key}.quote`)}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image src={avatar} alt={t(`${key}.name`)} fill sizes="48px" className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">{t(`${key}.name`)}</h4>
                  <p className="text-xs text-gray-500">{t(`${key}.title`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
