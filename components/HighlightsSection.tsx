import { useTranslations } from "next-intl"
import { BlobShape } from "@/components/BlobShape"

const HIGHLIGHTS = [
  {
    stat: "28+",
    key: "years" as const,
    bg: "bg-brand-red",
    textColor: "text-white",
    descColor: "text-white/75",
    statColor: "text-white/10",
    blob: { variant: "2" as const, color: "yellow" as const, className: "absolute -right-12 -top-12 w-52 h-52 opacity-25 mix-blend-multiply" },
  },
  {
    stat: "1996",
    key: "since" as const,
    bg: "bg-brand-yellow",
    textColor: "text-brand-brown",
    descColor: "text-brand-brown/70",
    statColor: "text-brand-brown/10",
    blob: { variant: "1" as const, color: "red" as const, className: "absolute -left-12 -bottom-12 w-52 h-52 opacity-20 mix-blend-multiply" },
  },
]

export function HighlightsSection() {
  const t = useTranslations("highlights")

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {HIGHLIGHTS.map((item) => (
          <div
            key={item.stat}
            className={`relative ${item.bg} rounded-[2.5rem] overflow-hidden p-10 md:p-14 flex flex-col justify-between min-h-[280px]`}
          >
            <BlobShape {...item.blob} />

            <span className={`text-[6rem] md:text-[8rem] font-bold leading-none ${item.statColor} select-none`}>
              {item.stat}
            </span>

            <div className="relative z-10 mt-4">
              <h3 className={`text-2xl md:text-3xl font-bold tracking-tight ${item.textColor} mb-3`}>
                {t(`${item.key}.label`)}
              </h3>
              <p className={`text-sm leading-relaxed font-medium max-w-xs ${item.descColor}`}>
                {t(`${item.key}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
