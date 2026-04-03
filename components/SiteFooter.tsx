import Link from "next/link"
import { useTranslations } from "next-intl"
import { contact } from "@/lib/data/footer"
import { Logo } from "./Logo"

const PRACTICE_AREA_KEYS = ["criminal", "corporate", "civil", "family", "realEstate"] as const
const COMPANY_LINK_KEYS = ["about", "ourServices", "meetGoce", "contact", "careers"] as const

export function SiteFooter() {
  const t = useTranslations("footer")

  return (
    <div className="relative pt-24 sm:pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="bg-black rounded-t-[3rem] px-8 sm:px-12 md:px-20 pt-16 pb-8 text-white relative overflow-hidden flex flex-col md:flex-row gap-10 md:gap-12 min-h-[400px]">

        <div className="flex-[1.5] z-10 flex flex-col pt-4">
          <Logo className="text-white mb-8" />
          <p className="text-xs text-gray-400 leading-relaxed font-medium max-w-xs">
            {t("description")}
          </p>
        </div>

        <div className="flex-1 z-10 flex flex-col pt-4">
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8">{t("practiceAreasHeading")}</h4>
          <ul className="flex flex-col gap-4">
            {PRACTICE_AREA_KEYS.map((key) => (
              <li key={key}>
                <Link href="#" className="text-xs text-gray-400 hover:text-white transition-colors font-medium">
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 z-10 flex flex-col pt-4">
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8">{t("companyHeading")}</h4>
          <ul className="flex flex-col gap-4">
            {COMPANY_LINK_KEYS.map((key) => (
              <li key={key}>
                <Link href="#" className="text-xs text-gray-400 hover:text-white transition-colors font-medium">
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-[1.5] z-10 flex flex-col pt-4">
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8">{t("locationHeading")}</h4>
          <div className="flex flex-col gap-2 text-xs text-gray-400 leading-relaxed font-medium">
            <p>{t("address1")}</p>
            <p>{t("address2")}</p>
            <p className="mt-2 text-white">Tel: {contact.phone}</p>
            <p className="mt-4">
              Email:{" "}
              <a
                href={`mailto:${contact.email}`}
                className="text-white underline underline-offset-4 decoration-gray-600 hover:decoration-white transition-colors"
              >
                {contact.email}
              </a>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
