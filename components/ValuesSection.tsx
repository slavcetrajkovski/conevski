import { useTranslations } from "next-intl"
import { Briefcase, ShieldAlert, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const VALUE_ITEMS: { key: "corporate" | "criminal" | "civil"; icon: LucideIcon }[] = [
  { key: "corporate", icon: Briefcase },
  { key: "criminal", icon: ShieldAlert },
  { key: "civil", icon: Users },
]

export function ValuesSection() {
  const t = useTranslations("values")

  return (
    <div className="relative z-30 px-4 mt-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 sm:p-12 md:p-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-4xl mx-auto text-foreground leading-tight tracking-tight">
          {t("heading")}
        </h2>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20">
          {VALUE_ITEMS.map(({ key, icon: Icon }) => (
            <div key={key} className="flex flex-col items-start">
              <div className="relative w-16 h-16 flex items-center justify-center mb-6">
                <div className="absolute inset-0 bg-brand-red rounded-full opacity-20 -translate-x-2 translate-y-2" />
                <div className="absolute inset-0 bg-brand-yellow rounded-full opacity-60 translate-x-2 translate-y-1" />
                <Icon className="w-8 h-8 text-foreground relative z-10" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{t(`${key}.title`)}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">{t(`${key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
